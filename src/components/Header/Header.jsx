import './Header.css'
import logo from './Lota Logo White.avif'
import { Link } from 'react-router-dom';

const nav_links = [
  'Home',
  'About',
  'Submit/Donate',
  'Contact Us',
].map((link) => (
  <Link className="header-nav-link">{link}</Link>
))

function Header() {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="LOTA logo" />
      <div className="header-nav">
        {nav_links}
      </div>
    </div>
  );
}

export default Header;
export { nav_links };