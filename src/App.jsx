import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PartyProvider, useParty } from './context/PartyContext';

// Screens
import Login from './screens/Login';
import CreateParty from './screens/CreateParty';
import HostDashboard from './screens/HostDashboard';
import HostReveal from './screens/HostReveal';
import JoinParty from './screens/JoinParty';
import SubmitWine from './screens/SubmitWine';
import WineList from './screens/WineList';
import RatingScreen from './screens/RatingScreen';

function ProtectedRoute({ children, requireAuth = true }) {
  const { user } = useParty();
  
  if (requireAuth && !user) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* Host Routes */}
      <Route path="/host/create-party" element={
        <ProtectedRoute><CreateParty /></ProtectedRoute>
      } />
      <Route path="/host/party/:code" element={
        <ProtectedRoute><HostDashboard /></ProtectedRoute>
      } />
      <Route path="/host/reveal/:code" element={
        <ProtectedRoute><HostReveal /></ProtectedRoute>
      } />
      
      {/* Guest Routes */}
      <Route path="/guest/join" element={
        <ProtectedRoute><JoinParty /></ProtectedRoute>
      } />
      <Route path="/guest/submit/:code" element={
        <ProtectedRoute><SubmitWine /></ProtectedRoute>
      } />
      <Route path="/guest/wines/:code" element={
        <ProtectedRoute><WineList /></ProtectedRoute>
      } />
      <Route path="/guest/rate/:code/:bagNumber" element={
        <ProtectedRoute><RatingScreen /></ProtectedRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <PartyProvider>
        <AppRoutes />
      </PartyProvider>
    </Router>
  );
}

export default App;
