import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParty } from '../context/PartyContext';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useParty();
  const [name, setName] = useState('');
  const [role, setRole] = useState(null);

  const handleSubmit = () => {
    if (name.trim() && role) {
      login(name.trim(), role);
      if (role === 'host') {
        navigate('/host/create-party');
      } else {
        navigate('/guest/join');
      }
    }
  };

  return (
    <div className="login-screen">
      <div className="login-content">
        <div className="logo-section fade-in">
          <div className="wine-icon">🍷</div>
          <h1 className="brand-title">BlindWine</h1>
          <p className="tagline">Taste • Rate • Reveal</p>
        </div>

        <div className="login-form slide-up">
          <label className="input-label">Your Name</label>
          <input
            type="text"
            className="name-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
            autoFocus
          />

          <div className="role-selector">
            <button
              className={`role-btn ${role === 'host' ? 'selected' : ''}`}
              onClick={() => setRole('host')}
            >
              <div className="role-title">Host</div>
              <div className="role-desc">Create a party</div>
            </button>
            <button
              className={`role-btn ${role === 'guest' ? 'selected' : ''}`}
              onClick={() => setRole('guest')}
            >
              <div className="role-title">Guest</div>
              <div className="role-desc">Join a party</div>
            </button>
          </div>

          <button
            className="continue-btn"
            onClick={handleSubmit}
            disabled={!name.trim() || !role}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
