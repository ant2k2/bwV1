import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParty } from '../context/PartyContext';
import './JoinParty.css';

function JoinParty() {
  const navigate = useNavigate();
  const { joinParty, user } = useParty();
  const [partyCode, setPartyCode] = useState('');
  const [error, setError] = useState('');

  const handleJoin = () => {
    if (partyCode.trim()) {
      const success = joinParty(partyCode.trim().toUpperCase(), user.name);
      if (success) {
        navigate(`/guest/submit/${partyCode.trim().toUpperCase()}`);
      } else {
        setError('Party not found');
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && partyCode.trim()) {
      handleJoin();
    }
  };

  return (
    <div className="join-party-screen">
      <div className="simple-header">
        <div className="header-spacer"></div>
        <div className="header-user">{user?.name}</div>
      </div>
      
      <div className="wine-stain"></div>
      
      <div className="join-content">
        <div className="logo-section fade-in">
          <div className="wine-icon">🍷</div>
          <h1 className="brand-title">BlindWine</h1>
          <p className="tagline">Taste • Rate • Reveal</p>
        </div>

        <div className="join-form slide-up">
          <label className="input-label">Party Code</label>
          <input
            type="text"
            className="party-input"
            placeholder="ABC123"
            value={partyCode}
            onChange={(e) => { setPartyCode(e.target.value.toUpperCase()); setError(''); }}
            onKeyPress={handleKeyPress}
            maxLength={10}
            autoFocus
          />
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            className="join-button"
            onClick={handleJoin}
            disabled={!partyCode.trim()}
          >
            Pour In
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinParty;
