import { useParams, useNavigate } from 'react-router-dom';
import { useParty } from '../context/PartyContext';
import Header from '../components/Header';
import './HostDashboard.css';

function HostDashboard() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { getParty, startParty, closeParty } = useParty();
  
  const party = getParty(code);

  if (!party) {
    return <div className="error-screen">Party not found</div>;
  }

  const handleStart = () => {
    startParty(code);
  };

  const handleClose = () => {
    closeParty(code);
    navigate(`/host/reveal/${code}`);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="host-dashboard-screen">
      <Header partyName={party.name} partyTheme={party.theme} />

      <div className="dashboard-content">
        <div className="party-code-card fade-in">
          <div className="code-label">Party Code</div>
          <div className="code-display" onClick={copyCode}>
            {code}
          </div>
          <div className="code-hint">Tap to copy</div>
        </div>

        <div className="dashboard-section slide-up stagger-1">
          <h3 className="section-title">Guests ({party.guests.length})</h3>
          {party.guests.length === 0 ? (
            <div className="empty-state">No guests yet</div>
          ) : (
            <div className="guests-list">
              {party.guests.map((guest, idx) => (
                <div key={idx} className="guest-item">
                  <div className="guest-name">{guest.name}</div>
                  <div className="guest-status">Joined</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-section slide-up stagger-2">
          <h3 className="section-title">Wines Submitted ({party.wines.length})</h3>
          {party.wines.length === 0 ? (
            <div className="empty-state">No wines submitted</div>
          ) : (
            <div className="wines-list">
              {party.wines.map((wine, idx) => (
                <div key={idx} className="wine-item">
                  <div className="wine-bag-number">{wine.bagNumber}</div>
                  <div className="wine-info">
                    <div className="wine-name">Wine #{wine.bagNumber}</div>
                    <div className="wine-meta">By {wine.submittedBy}</div>
                  </div>
                  <div className="wine-ratings-count">
                    {wine.ratings.length} ratings
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-actions slide-up stagger-3">
          {party.status === 'waiting' && (
            <button className="action-btn primary" onClick={handleStart}>
              Start Party
            </button>
          )}
          {party.status === 'active' && (
            <button className="action-btn secondary" onClick={handleClose}>
              Close Party & Reveal Results
            </button>
          )}
          {party.status === 'closed' && (
            <button className="action-btn" onClick={() => navigate(`/host/reveal/${code}`)}>
              View Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HostDashboard;
