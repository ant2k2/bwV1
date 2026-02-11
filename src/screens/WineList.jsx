import { useNavigate, useParams } from 'react-router-dom';
import { useParty } from '../context/PartyContext';
import Header from '../components/Header';
import './WineList.css';

function WineList() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { getParty, user } = useParty();

  const party = getParty(code);
  if (!party) return <div>Party not found</div>;

  const getUserRating = (wine) => {
    const rating = wine.ratings.find(r => r.guestName === user.name);
    return rating ? rating.rating : null;
  };

  const ratedCount = party.wines.filter(w => getUserRating(w) !== null).length;
  const totalCount = party.wines.length;
  const progressPercent = (ratedCount / totalCount) * 100;

  const handleRateWine = (bagNumber) => {
    navigate(`/guest/rate/${code}/${bagNumber}`);
  };

  return (
    <div className="wine-list-screen">
      <Header partyName={party.name} partyTheme={party.theme} />

      <div className="wine-list">
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <p className="progress-text">{ratedCount} of {totalCount} wines rated</p>
        </div>

        {party.wines.map((wine, idx) => {
          const userRating = getUserRating(wine);
          const isYourWine = wine.submittedBy === user.name;
          
          return (
            <div
              key={wine.bagNumber}
              className={`wine-item ${userRating ? 'rated' : ''} ${isYourWine ? 'yours' : ''} fade-in stagger-${idx % 6 + 1}`}
              onClick={() => handleRateWine(wine.bagNumber)}
            >
              <div className="wine-number">{wine.bagNumber}</div>
              <div className="wine-info">
                <div className="wine-label">Wine #{wine.bagNumber}</div>
                <div className="wine-status">
                  {userRating ? 'Rated' : 'Ready to Rate'}
                </div>
                {userRating && (
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={`star ${star <= userRating ? 'filled' : 'empty'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="action-icon">
                {userRating ? '✓' : '→'}
              </div>
            </div>
          );
        })}
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
