import { useParty } from '../context/PartyContext';
import './Header.css';

function Header({ partyName, partyTheme, showPartyInfo = true }) {
  const { user } = useParty();

  return (
    <div className="app-header">
      {showPartyInfo && partyName && (
        <div className="header-party-info">
          <h2 className="header-party-name">{partyName}</h2>
          {partyTheme && <p className="header-party-theme">{partyTheme}</p>}
        </div>
      )}
      {!showPartyInfo && (
        <div className="header-spacer"></div>
      )}
      {user && (
        <div className="header-user">
          {user.name}
        </div>
      )}
    </div>
  );
}

export default Header;
