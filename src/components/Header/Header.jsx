import './Header.css'
import logo from './Lota Logo White.avif'
import { nav_links } from '../../constants';

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