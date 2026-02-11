import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinParty from './screens/JoinParty';
import SubmitWine from './screens/SubmitWine';
import WineList from './screens/WineList';
import RatingScreen from './screens/RatingScreen';

// Mock party data
export const mockPartyData = {
  partyId: 'party123',
  partyName: 'Friday Night Flight',
  partyTheme: 'Pinot Noirs Under $30',
  hostName: 'Sarah',
  wines: [
    { bagNumber: 1, submitted: true, isYourWine: false, rated: true, userRating: 4 },
    { bagNumber: 2, submitted: true, isYourWine: true, rated: false, userRating: null },
    { bagNumber: 3, submitted: true, isYourWine: false, rated: true, userRating: 3 },
    { bagNumber: 4, submitted: true, isYourWine: false, rated: false, userRating: null },
    { bagNumber: 5, submitted: true, isYourWine: false, rated: true, userRating: 5 },
    { bagNumber: 6, submitted: true, isYourWine: false, rated: false, userRating: null },
    { bagNumber: 7, submitted: true, isYourWine: false, rated: false, userRating: null },
  ]
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinParty />} />
        <Route path="/submit-wine" element={<SubmitWine />} />
        <Route path="/wine-list" element={<WineList />} />
        <Route path="/rate/:bagNumber" element={<RatingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
