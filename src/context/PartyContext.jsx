import { createContext, useContext, useState, useEffect } from 'react';

const PartyContext = createContext();

// Generate random party code
const generatePartyCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export function PartyProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('bw_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [parties, setParties] = useState(() => {
    const saved = localStorage.getItem('bw_parties');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to localStorage whenever parties change
  useEffect(() => {
    localStorage.setItem('bw_parties', JSON.stringify(parties));
    
    // Broadcast changes to other tabs
    window.dispatchEvent(new Event('storage'));
  }, [parties]);

  // Listen for changes from other tabs
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('bw_parties');
      if (saved) {
        setParties(JSON.parse(saved));
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const login = (name, role) => {
    const userData = { name, role };
    setUser(userData);
    localStorage.setItem('bw_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bw_user');
  };

  const createParty = (partyName, partyTheme) => {
    const code = generatePartyCode();
    const newParty = {
      code,
      name: partyName,
      theme: partyTheme,
      hostName: user.name,
      status: 'waiting', // waiting, active, closed
      guests: [],
      wines: [],
      createdAt: Date.now()
    };

    setParties(prev => ({
      ...prev,
      [code]: newParty
    }));

    return code;
  };

  const joinParty = (code, guestName) => {
    const party = parties[code];
    if (!party) return false;

    const isAlreadyGuest = party.guests.some(g => g.name === guestName);
    if (isAlreadyGuest) return true;

    setParties(prev => ({
      ...prev,
      [code]: {
        ...prev[code],
        guests: [...prev[code].guests, { name: guestName, joinedAt: Date.now() }]
      }
    }));

    return true;
  };

  const submitWine = (code, guestName, bagNumber, wineData) => {
    setParties(prev => ({
      ...prev,
      [code]: {
        ...prev[code],
        wines: [
          ...prev[code].wines.filter(w => w.submittedBy !== guestName),
          {
            bagNumber,
            ...wineData,
            submittedBy: guestName,
            ratings: [],
            submittedAt: Date.now()
          }
        ]
      }
    }));
  };

  const rateWine = (code, guestName, bagNumber, rating) => {
    setParties(prev => {
      const party = prev[code];
      const wines = party.wines.map(wine => {
        if (wine.bagNumber === bagNumber) {
          const existingRating = wine.ratings.find(r => r.guestName === guestName);
          if (existingRating) {
            return {
              ...wine,
              ratings: wine.ratings.map(r =>
                r.guestName === guestName ? { ...r, rating } : r
              )
            };
          } else {
            return {
              ...wine,
              ratings: [...wine.ratings, { guestName, rating }]
            };
          }
        }
        return wine;
      });

      return {
        ...prev,
        [code]: {
          ...prev[code],
          wines
        }
      };
    });
  };

  const startParty = (code) => {
    setParties(prev => ({
      ...prev,
      [code]: {
        ...prev[code],
        status: 'active'
      }
    }));
  };

  const closeParty = (code) => {
    setParties(prev => ({
      ...prev,
      [code]: {
        ...prev[code],
        status: 'closed'
      }
    }));
  };

  const getParty = (code) => {
    return parties[code] || null;
  };

  const value = {
    user,
    login,
    logout,
    createParty,
    joinParty,
    submitWine,
    rateWine,
    startParty,
    closeParty,
    getParty,
    parties
  };

  return <PartyContext.Provider value={value}>{children}</PartyContext.Provider>;
}

export function useParty() {
  const context = useContext(PartyContext);
  if (!context) {
    throw new Error('useParty must be used within PartyProvider');
  }
  return context;
}
