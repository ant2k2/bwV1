import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockPartyData } from '../App';
import './RatingScreen.css';

function RatingScreen() {
  const { bagNumber } = useParams();
  const navigate = useNavigate();
  const wine = mockPartyData.wines.find(w => w.bagNumber === parseInt(bagNumber));
  const [rating, setRating] = useState(wine?.userRating || 3);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save delay
    setTimeout(() => {
      // In real app, this would save to backend
      navigate('/wine-list');
    }, 600);
  };

  const ratingDescriptions = {
    1: "Not my style",
    2: "Could be better",
    3: "Pretty good",
    4: "Really enjoyed it",
    5: "Absolutely stellar!"
  };

  return (
    <div className="rating-screen-container">
      <button className="back-button" onClick={() => navigate('/wine-list')}>
        ← Back to List
      </button>

      <div className="rating-content">
        <div className="wine-display scale-in">
          <div className="wine-bottle-large">🍷</div>
          <div className="bag-label">
            <span className="bag-icon-large">🛍️</span>
            <span className="bag-number-large">#{bagNumber}</span>
          </div>
          <h1>Wine #{bagNumber}</h1>
          {wine?.isYourWine && (
            <div className="your-wine-indicator">✨ This is your wine</div>
          )}
        </div>

        <div className="rating-section fade-in">
          <h2>How good is this wine?</h2>
          <p className="rating-instruction">Slide to rate from 1-5</p>

          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="rating-slider"
            />
            <div className="slider-track-fill" style={{ width: `${((rating - 1) / 4) * 100}%` }}></div>
          </div>

          <div className="rating-display-large">
            <div className="stars-large">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  className={`star-button ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ⭐
                </button>
              ))}
            </div>
            <p className="rating-description">{ratingDescriptions[rating]}</p>
          </div>
        </div>

        <button 
          className={`save-button ${isSaving ? 'saving' : ''}`}
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Rating'}
        </button>
      </div>
    </div>
  );
}

export default RatingScreen;
