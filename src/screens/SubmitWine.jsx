import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPartyData } from '../App';
import './SubmitWine.css';

// Simulated wine database for barcode scanning
const wineDatabase = [
  { barcode: '12345', name: 'La Crema Pinot Noir', producer: 'La Crema', vintage: 2021, region: 'Sonoma Coast' },
  { barcode: '12346', name: 'Erath Pinot Noir', producer: 'Erath', vintage: 2020, region: 'Willamette Valley' },
  { barcode: '12347', name: 'Meiomi Pinot Noir', producer: 'Meiomi', vintage: 2021, region: 'California' },
  { barcode: '12348', name: 'Banshee Pinot Noir', producer: 'Banshee', vintage: 2020, region: 'Sonoma County' },
  { barcode: '12349', name: 'A to Z Pinot Noir', producer: 'A to Z Wineworks', vintage: 2021, region: 'Oregon' },
  { barcode: '12350', name: 'Belle Glos Clark & Telephone', producer: 'Belle Glos', vintage: 2020, region: 'Santa Maria Valley' },
  { barcode: '12351', name: 'Cloudline Pinot Noir', producer: 'Cloudline', vintage: 2021, region: 'Willamette Valley' },
];

function SubmitWine() {
  const navigate = useNavigate();
  const [selectedBag, setSelectedBag] = useState(null);
  const [selectedWine, setSelectedWine] = useState(null);
  const [showWineSelector, setShowWineSelector] = useState(false);

  const availableBags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const usedBags = mockPartyData.wines.map(w => w.bagNumber);
  
  const handleBagSelect = (bagNum) => {
    setSelectedBag(bagNum);
  };

  const handleScanWine = () => {
    setShowWineSelector(true);
  };

  const handleWineSelect = (wine) => {
    setSelectedWine(wine);
    setShowWineSelector(false);
  };

  const handleSubmit = () => {
    if (selectedBag && selectedWine) {
      // In real app, this would submit to backend
      navigate('/wine-list');
    }
  };

  return (
    <div className="submit-wine-container">
      <div className="header">
        <div className="party-info fade-in">
          <h1>{mockPartyData.partyName}</h1>
          <p className="theme">{mockPartyData.partyTheme}</p>
        </div>
      </div>

      <div className="content">
        <div className="step-card slide-up">
          <div className="step-number">1</div>
          <h2>Choose Your Bag Number</h2>
          <p className="instruction">Pick an available numbered bag</p>
          
          <div className="bag-grid">
            {availableBags.map((num, idx) => (
              <button
                key={num}
                className={`bag-button ${selectedBag === num ? 'selected' : ''} ${usedBags.includes(num) ? 'used' : ''} fade-in stagger-${idx % 6 + 1}`}
                onClick={() => handleBagSelect(num)}
                disabled={usedBags.includes(num)}
              >
                <span className="bag-icon">🛍️</span>
                <span className="bag-num">{num}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedBag && (
          <div className="step-card slide-up">
            <div className="step-number">2</div>
            <h2>Scan Your Bottle</h2>
            <p className="instruction">Scan the barcode on your wine bottle</p>
            
            {!selectedWine ? (
              <button className="scan-button" onClick={handleScanWine}>
                <span className="scan-icon">📷</span>
                <span>Tap to Scan Barcode</span>
              </button>
            ) : (
              <div className="wine-preview scale-in">
                <div className="wine-icon">🍷</div>
                <div className="wine-details">
                  <h3>{selectedWine.name}</h3>
                  <p className="producer">{selectedWine.producer}</p>
                  <p className="vintage">{selectedWine.vintage} • {selectedWine.region}</p>
                </div>
                <button className="change-button" onClick={handleScanWine}>Change</button>
              </div>
            )}
          </div>
        )}

        {selectedBag && selectedWine && (
          <button className="submit-button slide-up" onClick={handleSubmit}>
            Cork It! 🍾
          </button>
        )}
      </div>

      {showWineSelector && (
        <div className="wine-selector-modal">
          <div className="modal-content scale-in">
            <h3>Select Wine (Simulated Scan)</h3>
            <p className="modal-instruction">In production, this would scan your barcode</p>
            <div className="wine-list">
              {wineDatabase.map((wine) => (
                <button
                  key={wine.barcode}
                  className="wine-option"
                  onClick={() => handleWineSelect(wine)}
                >
                  <div className="wine-name">{wine.name}</div>
                  <div className="wine-meta">{wine.producer} • {wine.vintage}</div>
                </button>
              ))}
            </div>
            <button className="cancel-button" onClick={() => setShowWineSelector(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitWine;
