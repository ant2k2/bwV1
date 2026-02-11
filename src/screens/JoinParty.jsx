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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && partyCode.trim()) {
      handleJoin();
    }
  };

  return (
    <div className="join-party-screen">
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
            onChange={(e) => setPartyCode(e.target.value.toUpperCase())}
            onKeyPress={handleKeyPress}
            maxLength={10}
            autoFocus
          />
          
          <button 
            className="join-button"
            onClick={handleJoin}
            disabled={!partyCode.trim()}
          >
            Pour In 🍾
          </button>
          
          <div className="hint">Try: PARTY123</div>
        </div>
      </div>
    </div>
  );
}

export default JoinParty;
