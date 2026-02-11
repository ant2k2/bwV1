import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPartyData } from '../App';
import './SubmitWine.css';

const wineDatabase = [
  { id: 1, name: 'La Crema Pinot Noir', producer: 'La Crema', vintage: 2021, region: 'Sonoma Coast' },
  { id: 2, name: 'Erath Pinot Noir', producer: 'Erath', vintage: 2020, region: 'Willamette Valley' },
  { id: 3, name: 'Meiomi Pinot Noir', producer: 'Meiomi', vintage: 2021, region: 'California' },
  { id: 4, name: 'Banshee Pinot Noir', producer: 'Banshee', vintage: 2020, region: 'Sonoma County' },
  { id: 5, name: 'A to Z Pinot Noir', producer: 'A to Z Wineworks', vintage: 2021, region: 'Oregon' },
];

function SubmitWine() {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedWine, setSelectedWine] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  const usedNumbers = mockPartyData.wines.map(w => w.bagNumber);

  const handleNumberSelect = (num) => {
    if (!usedNumbers.includes(num)) {
      setSelectedNumber(num);
    }
  };

  const handleScan = () => {
    setShowScanner(true);
  };

  const handleWineSelect = (wine) => {
    setSelectedWine(wine);
    setShowScanner(false);
  };

  const handleSubmit = () => {
    if (selectedNumber && selectedWine) {
      navigate('/wine-list');
    }
  };

  return (
    <div className="submit-wine-screen">
      <div className="header">
        <h2 className="party-name">{mockPartyData.partyName}</h2>
        <p className="party-theme">{mockPartyData.partyTheme}</p>
      </div>

      <div className="content">
        <div className="step-section">
          <div className="step-label">Step 1</div>
          <h3 className="step-title">Choose Your Number</h3>
          <div className="number-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <button
                key={num}
                className={`number-btn ${selectedNumber === num ? 'selected' : ''} ${usedNumbers.includes(num) ? 'used' : ''} fade-in stagger-${idx % 6 + 1}`}
                onClick={() => handleNumberSelect(num)}
                disabled={usedNumbers.includes(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {selectedNumber && (
          <div className="step-section slide-up">
            <div className="step-label">Step 2</div>
            <h3 className="step-title">Scan Your Bottle</h3>
            
            {!selectedWine ? (
              <div className="scan-area" onClick={handleScan}>
                <div className="scan-icon">📷</div>
                <div className="scan-text">Tap to Scan Barcode</div>
              </div>
            ) : (
              <div className="wine-preview">
                <div className="wine-details">
                  <div className="wine-name">{selectedWine.name}</div>
                  <div className="wine-meta">
                    {selectedWine.producer} • {selectedWine.vintage} • {selectedWine.region}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedNumber && selectedWine && (
          <button className="submit-btn slide-up" onClick={handleSubmit}>
            Cork It
          </button>
        )}
      </div>

      {showScanner && (
        <div className="scanner-modal" onClick={() => setShowScanner(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Scan Barcode</h3>
            <p className="modal-subtitle">Simulated for demo - select a wine</p>
            <div className="wine-options">
              {wineDatabase.map((wine) => (
                <button
                  key={wine.id}
                  className="wine-option"
                  onClick={() => handleWineSelect(wine)}
                >
                  <div className="option-name">{wine.name}</div>
                  <div className="option-meta">{wine.producer} • {wine.vintage}</div>
                </button>
              ))}
            </div>
            <button className="cancel-btn" onClick={() => setShowScanner(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitWine;
