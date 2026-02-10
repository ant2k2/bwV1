import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinParty.css';

function JoinParty() {
  const navigate = useNavigate();
  const [partyCode, setPartyCode] = useState('');

  const handleJoin = () => {
    if (partyCode.trim()) {
      navigate('/submit-wine');
    }
  };

  return (
    <div className="join-party-container">
      <div className="background-decoration"></div>
      
      <div className="content fade-in">
        <div className="logo-section">
          <div className="wine-glass-icon">🍷</div>
          <h1 className="app-title">BlindWine</h1>
          <p className="tagline">Taste. Rate. Reveal.</p>
        </div>

        <div className="join-card slide-up">
          <h2>Join a Party</h2>
          <p className="instruction">Enter your party code to get started</p>
          
          <input
            type="text"
            className="party-code-input"
            placeholder="PARTY123"
            value={partyCode}
            onChange={(e) => setPartyCode(e.target.value.toUpperCase())}
            maxLength={10}
          />

          <button 
            className="primary-button"
            onClick={handleJoin}
            disabled={!partyCode.trim()}
          >
            Pour In
          </button>

          <div className="demo-hint">
            <small>Demo Code: PARTY123</small>
          </div>
        </div>

        <div className="feature-pills">
          <div className="pill stagger-1 fade-in">🎭 Anonymous Tasting</div>
          <div className="pill stagger-2 fade-in">⭐ Rate & Compare</div>
          <div className="pill stagger-3 fade-in">🏆 See the Winner</div>
        </div>
      </div>
    </div>
  );
}

export default JoinParty;
