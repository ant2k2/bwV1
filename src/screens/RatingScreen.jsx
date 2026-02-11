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

  const ratingDescriptions = {
    1: "Not my style",
    2: "Could be better",
    3: "Pretty good",
    4: "Really enjoyed it",
    5: "Absolutely stellar!"
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      navigate('/wine-list');
    }, 500);
  };

  return (
    <div className="rating-screen">
      <button className="back-btn" onClick={() => navigate('/wine-list')}>
        ←
      </button>

      <div className="rating-content">
        <div className="wine-display">
          <div className={`wine-number-display ${wine?.isYourWine ? 'yours' : ''}`}>
            {bagNumber}
          </div>
        </div>

        <div className="rating-section">
          <h2 className="rating-question">How good is this wine?</h2>

          <div className="stars-container">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                className={`star-btn ${star <= rating ? 'active' : ''}`}
                onClick={() => setRating(star)}
              >
                ⭐
              </button>
            ))}
          </div>

          <div className="rating-description">
            {ratingDescriptions[rating]}
          </div>

          <button 
            className={`save-btn ${isSaving ? 'saving' : ''}`}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Rating'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingScreen;
