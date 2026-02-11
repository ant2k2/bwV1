import { useNavigate } from 'react-router-dom';
import { mockPartyData } from '../App';
import './WineList.css';

function WineList() {
  const navigate = useNavigate();

  const ratedCount = mockPartyData.wines.filter(w => w.rated).length;
  const totalCount = mockPartyData.wines.length;
  const progressPercent = (ratedCount / totalCount) * 100;

  const handleRateWine = (bagNumber) => {
    navigate(`/rate/${bagNumber}`);
  };

  return (
    <div className="wine-list-screen">
      <div className="header">
        <h2 className="party-name">{mockPartyData.partyName}</h2>
        <p className="party-theme">{mockPartyData.partyTheme}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className="progress-text">{ratedCount} of {totalCount} wines rated</p>
      </div>

      <div className="wine-list">
        {mockPartyData.wines.map((wine, idx) => (
          <div
            key={wine.bagNumber}
            className={`wine-item ${wine.rated ? 'rated' : ''} ${wine.isYourWine ? 'yours' : ''} fade-in stagger-${idx % 6 + 1}`}
            onClick={() => handleRateWine(wine.bagNumber)}
          >
            <div className="wine-number">{wine.bagNumber}</div>
            <div className="wine-info">
              <div className="wine-label">Wine #{wine.bagNumber}</div>
              <div className="wine-status">
                {wine.rated ? 'Rated' : 'Ready to Rate'}
              </div>
              {wine.rated && (
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      className={`star ${star <= wine.userRating ? 'filled' : 'empty'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="action-icon">
              {wine.rated ? '✓' : '→'}
            </div>
          </div>
        ))}
      </div>

      {ratedCount === totalCount && (
        <div className="completion-message slide-up">
          <p>🎉 All wines rated!</p>
          <p className="sub-message">Waiting for host to reveal results...</p>
        </div>
      )}
    </div>
  );
}

export default WineList;
