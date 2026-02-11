import { useParams } from 'react-router-dom';
import { useParty } from '../context/PartyContext';
import Header from '../components/Header';
import './HostReveal.css';

function HostReveal() {
  const { code } = useParams();
  const { getParty } = useParty();
  
  const party = getParty(code);

  if (!party) {
    return <div className="error-screen">Party not found</div>;
  }

  // Calculate average ratings for each wine
  const winesWithScores = party.wines.map(wine => {
    const totalRating = wine.ratings.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = wine.ratings.length > 0 ? totalRating / wine.ratings.length : 0;
    return {
      ...wine,
      avgRating: avgRating.toFixed(1)
    };
  }).sort((a, b) => b.avgRating - a.avgRating);

  const topThree = winesWithScores.slice(0, 3);

  return (
    <div className="host-reveal-screen">
      <Header partyName={party.name} partyTheme={party.theme} />

      <div className="reveal-content">
        <div className="reveal-header fade-in">
          <h1 className="reveal-title">🍾 The Results Are In!</h1>
        </div>

        {topThree.length >= 1 && (
          <div className="podium slide-up">
            {topThree[1] && (
              <div className="podium-place second">
                <div className="medal">🥈</div>
                <div className="rank-number">{topThree[1].bagNumber}</div>
                <div className="wine-details">
                  <div className="wine-by">By {topThree[1].submittedBy}</div>
                  <div className="score">{topThree[1].avgRating}</div>
                </div>
              </div>
            )}

            {topThree[0] && (
              <div className="podium-place first">
                <div className="medal">🥇</div>
                <div className="rank-number">{topThree[0].bagNumber}</div>
                <div className="wine-details">
                  <div className="wine-by">By {topThree[0].submittedBy}</div>
                  <div className="score">{topThree[0].avgRating}</div>
                </div>
              </div>
            )}

            {topThree[2] && (
              <div className="podium-place third">
                <div className="medal">🥉</div>
                <div className="rank-number">{topThree[2].bagNumber}</div>
                <div className="wine-details">
                  <div className="wine-by">By {topThree[2].submittedBy}</div>
                  <div className="score">{topThree[2].avgRating}</div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="rankings-section slide-up stagger-2">
          <h3 className="rankings-title">Complete Rankings</h3>
          {winesWithScores.map((wine, idx) => (
            <div key={wine.bagNumber} className="ranking-item">
              <div className="rank">#{idx + 1}</div>
              <div className="ranking-wine-info">
                <div className="ranking-wine-name">Wine #{wine.bagNumber}</div>
                <div className="ranking-wine-meta">
                  By {wine.submittedBy} • {wine.ratings.length} ratings
                </div>
              </div>
              <div className="ranking-score">{wine.avgRating}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HostReveal;
