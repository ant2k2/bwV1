import { useNavigate } from 'react-router-dom';
import { mockPartyData } from '../App';
import './WineList.css';

function WineList() {
  const navigate = useNavigate();

  const ratedCount = mockPartyData.wines.filter(w => w.rated).length;
  const totalCount = mockPartyData.wines.length;

  const handleRateWine = (bagNumber) => {
    navigate(`/rate/${bagNumber}`);
  };

  const handleViewResults = () => {
    navigate('/reveal');
  };

  return (
    <div className="wine-list-container">
      <div className="header">
        <div className="party-info fade-in">
          <h1>{mockPartyData.partyName}</h1>
          <p className="theme">{mockPartyData.partyTheme}</p>
          <div className="progress-info">
            <span className="progress-text">{ratedCount} of {totalCount} wines rated</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(ratedCount / totalCount) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="wines-grid">
          {mockPartyData.wines.map((wine, idx) => (
            <div
              key={wine.bagNumber}
              className={`wine-card fade-in stagger-${idx % 6 + 1}`}
              onClick={() => !wine.rated && handleRateWine(wine.bagNumber)}
            >
              <div className="wine-card-header">
                <div className="bag-badge">
                  <span className="bag-icon-small">🛍️</span>
                  <span className="bag-number">#{wine.bagNumber}</span>
                </div>
                {wine.isYourWine && (
                  <div className="your-wine-badge">✨ Yours</div>
                )}
              </div>

              <div className="wine-card-content">
                <div className="wine-bottle-icon">🍷</div>
                <div className="wine-mystery">
                  <h3>Wine #{wine.bagNumber}</h3>
                  <p className="mystery-text">Mystery awaits...</p>
                </div>
              </div>

              {wine.rated ? (
                <div className="rating-display">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={star <= wine.userRating ? 'star filled' : 'star'}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <button 
                    className="edit-rating-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRateWine(wine.bagNumber);
                    }}
                  >
                    Edit Rating
                  </button>
                </div>
              ) : (
                <button className="rate-button">
                  Rate this Wine →
                </button>
              )}
            </div>
          ))}
        </div>

        {ratedCount === totalCount && (
          <div className="completion-banner slide-up">
            <div className="banner-content">
              <h3>🎉 All wines rated!</h3>
              <p>Waiting for host to reveal results...</p>
            </div>
            <button className="preview-button" onClick={handleViewResults}>
              Preview Results
            </button>
          </div>
        )}
      </div>

      <div className="bottom-nav">
        <div className="nav-item">
          <span className="nav-icon">🍷</span>
          <span className="nav-label">Wines</span>
        </div>
      </div>
    </div>
  );
}

export default WineList;
