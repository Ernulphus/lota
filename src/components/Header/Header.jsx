import './Header.css'
import logo from './Lota Logo White.avif'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-wrapper">
      <Link to='/'>
        <img src={logo} alt="LOTA logo" />
      </Link>
      <NavBar />
    </div>
  );
}

export default Header;