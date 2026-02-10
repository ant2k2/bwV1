import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPartyData } from '../App';
import './RevealScreen.css';

function RevealScreen() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Trigger reveal animation after component mounts
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '';
  };

  const getYourWineRank = () => {
    const yourWine = mockPartyData.wines.find(w => w.isYourWine);
    const revealWine = mockPartyData.revealData.find(w => w.bagNumber === yourWine?.bagNumber);
    return revealWine?.rank;
  };

  const yourRank = getYourWineRank();

  return (
    <div className="reveal-screen-container">
      <div className="reveal-header">
        <h1 className="fade-in">🍾 The Results Are In!</h1>
        <p className="subtitle fade-in">{mockPartyData.partyName}</p>
        {yourRank && (
          <div className="your-wine-result slide-up">
            <span className="result-icon">{yourRank <= 3 ? '🎉' : '👍'}</span>
            <span>Your wine placed #{yourRank}</span>
          </div>
        )}
      </div>

      <div className="results-content">
        <div className="podium-section">
          {/* Top 3 Podium Display */}
          <div className="podium">
            {/* 2nd Place */}
            {mockPartyData.revealData[1] && (
              <div className="podium-place second scale-in stagger-1">
                <div className="medal">🥈</div>
                <div className="podium-wine">
                  <div className="rank-number">2</div>
                  <div className="wine-bottle">🍷</div>
                  <h3 className="wine-name">{mockPartyData.revealData[1].name}</h3>
                  <p className="wine-producer">{mockPartyData.revealData[1].producer}</p>
                  <p className="wine-vintage">{mockPartyData.revealData[1].vintage}</p>
                  <div className="score-badge">{mockPartyData.revealData[1].avgScore.toFixed(1)}</div>
                </div>
              </div>
            )}

            {/* 1st Place */}
            {mockPartyData.revealData[0] && (
              <div className="podium-place first scale-in">
                <div className="medal winner-medal">🥇</div>
                <div className="podium-wine">
                  <div className="rank-number champion">1</div>
                  <div className="wine-bottle winner-bottle">🍷</div>
                  <h3 className="wine-name">{mockPartyData.revealData[0].name}</h3>
                  <p className="wine-producer">{mockPartyData.revealData[0].producer}</p>
                  <p className="wine-vintage">{mockPartyData.revealData[0].vintage}</p>
                  <div className="score-badge winner-score">{mockPartyData.revealData[0].avgScore.toFixed(1)}</div>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {mockPartyData.revealData[2] && (
              <div className="podium-place third scale-in stagger-2">
                <div className="medal">🥉</div>
                <div className="podium-wine">
                  <div className="rank-number">3</div>
                  <div className="wine-bottle">🍷</div>
                  <h3 className="wine-name">{mockPartyData.revealData[2].name}</h3>
                  <p className="wine-producer">{mockPartyData.revealData[2].producer}</p>
                  <p className="wine-vintage">{mockPartyData.revealData[2].vintage}</p>
                  <div className="score-badge">{mockPartyData.revealData[2].avgScore.toFixed(1)}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Complete Rankings List */}
        <div className="full-rankings">
          <h2>Complete Rankings</h2>
          <div className="rankings-list">
            {mockPartyData.revealData.map((wine, idx) => {
              const isYourWine = mockPartyData.wines.find(w => 
                w.bagNumber === wine.bagNumber && w.isYourWine
              );
              
              return (
                <div
                  key={wine.bagNumber}
                  className={`ranking-item fade-in stagger-${idx % 6 + 1} ${isYourWine ? 'your-wine-item' : ''}`}
                >
                  <div className="rank-position">
                    {getMedalEmoji(wine.rank) || `#${wine.rank}`}
                  </div>
                  <div className="wine-info">
                    <h4>{wine.name}</h4>
                    <p className="producer-text">{wine.producer} • {wine.vintage}</p>
                    {isYourWine && <span className="your-badge">✨ Yours</span>}
                  </div>
                  <div className="wine-score">
                    <span className="score-value">{wine.avgScore.toFixed(1)}</span>
                    <span className="score-label">avg</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="done-button slide-up" onClick={() => navigate('/wine-list')}>
          Back to Wine List
        </button>
      </div>
    </div>
  );
}

export default RevealScreen;
