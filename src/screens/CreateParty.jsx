import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParty } from '../context/PartyContext';
import './CreateParty.css';

function CreateParty() {
  const navigate = useNavigate();
  const { createParty, user } = useParty();
  const [partyName, setPartyName] = useState('');
  const [partyTheme, setPartyTheme] = useState('');

  const handleCreate = () => {
    if (partyName.trim()) {
      const code = createParty(partyName.trim(), partyTheme.trim());
      navigate(`/host/party/${code}`);
    }
  };

  return (
    <div className="create-party-screen">
      <div className="simple-header">
        <div className="header-spacer"></div>
        <div className="header-user">{user?.name}</div>
      </div>

      <div className="create-content">
        <div className="create-header fade-in">
          <h1 className="create-title">Create Your Party</h1>
          <p className="create-subtitle">Set up your blind tasting event</p>
        </div>

        <div className="create-form slide-up">
          <div className="form-group">
            <label className="form-label">Party Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Friday Night Flight"
              value={partyName}
              onChange={(e) => setPartyName(e.target.value)}
              maxLength={50}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">Theme (Optional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="Pinot Noirs Under $30"
              value={partyTheme}
              onChange={(e) => setPartyTheme(e.target.value)}
              maxLength={100}
            />
          </div>

          <button
            className="create-btn"
            onClick={handleCreate}
            disabled={!partyName.trim()}
          >
            Create Party
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateParty;
