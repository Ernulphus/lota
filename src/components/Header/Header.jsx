import './Header.css'
import logo from './Lota Logo White.avif'
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="LOTA logo" />
      <div className="header-nav">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;