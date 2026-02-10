import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinParty from './screens/JoinParty';
import SubmitWine from './screens/SubmitWine';
import WineList from './screens/WineList';
import RatingScreen from './screens/RatingScreen';
import RevealScreen from './screens/RevealScreen';

// Simulated party data for testing
export const mockPartyData = {
  partyId: 'party123',
  partyName: 'Friday Night Flight',
  partyTheme: 'Pinot Noirs Under $30',
  hostName: 'Sarah',
  wines: [
    { 
      bagNumber: 1, 
      name: 'La Crema Pinot Noir', 
      producer: 'La Crema', 
      vintage: 2021,
      region: 'Sonoma Coast',
      submitted: true,
      isYourWine: false,
      rated: true,
      userRating: 4
    },
    { 
      bagNumber: 2, 
      name: 'Erath Pinot Noir', 
      producer: 'Erath', 
      vintage: 2020,
      region: 'Willamette Valley',
      submitted: true,
      isYourWine: true, // User's wine
      rated: false,
      userRating: null
    },
    { 
      bagNumber: 3, 
      name: 'Meiomi Pinot Noir', 
      producer: 'Meiomi', 
      vintage: 2021,
      region: 'California',
      submitted: true,
      isYourWine: false,
      rated: true,
      userRating: 3
    },
    { 
      bagNumber: 4, 
      name: 'Banshee Pinot Noir', 
      producer: 'Banshee', 
      vintage: 2020,
      region: 'Sonoma County',
      submitted: true,
      isYourWine: false,
      rated: false,
      userRating: null
    },
    { 
      bagNumber: 5, 
      name: 'A to Z Pinot Noir', 
      producer: 'A to Z Wineworks', 
      vintage: 2021,
      region: 'Oregon',
      submitted: true,
      isYourWine: false,
      rated: true,
      userRating: 5
    },
    { 
      bagNumber: 6, 
      name: 'Belle Glos Clark & Telephone', 
      producer: 'Belle Glos', 
      vintage: 2020,
      region: 'Santa Maria Valley',
      submitted: true,
      isYourWine: false,
      rated: false,
      userRating: null
    },
    { 
      bagNumber: 7, 
      name: 'Cloudline Pinot Noir', 
      producer: 'Cloudline', 
      vintage: 2021,
      region: 'Willamette Valley',
      submitted: true,
      isYourWine: false,
      rated: false,
      userRating: null
    },
  ],
  revealData: [
    { bagNumber: 5, name: 'A to Z Pinot Noir', producer: 'A to Z Wineworks', vintage: 2021, avgScore: 4.8, rank: 1 },
    { bagNumber: 1, name: 'La Crema Pinot Noir', producer: 'La Crema', vintage: 2021, avgScore: 4.3, rank: 2 },
    { bagNumber: 6, name: 'Belle Glos Clark & Telephone', producer: 'Belle Glos', vintage: 2020, avgScore: 4.1, rank: 3 },
    { bagNumber: 4, name: 'Banshee Pinot Noir', producer: 'Banshee', vintage: 2020, avgScore: 3.9, rank: 4 },
    { bagNumber: 7, name: 'Cloudline Pinot Noir', producer: 'Cloudline', vintage: 2021, avgScore: 3.7, rank: 5 },
    { bagNumber: 2, name: 'Erath Pinot Noir', producer: 'Erath', vintage: 2020, avgScore: 3.4, rank: 6 },
    { bagNumber: 3, name: 'Meiomi Pinot Noir', producer: 'Meiomi', vintage: 2021, avgScore: 3.2, rank: 7 },
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
        <Route path="/reveal" element={<RevealScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
