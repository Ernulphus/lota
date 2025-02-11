import { Link } from "react-router-dom";
import { nav_routes } from '../../constants';
import './NavBar.css';

function NavBarLink ({ text, href }) {
  return (
    <Link
      className="nav-link"
      to={href}
    >
      {text}
    </Link>
  );
}

function NavBar () {
  return Object.keys(nav_routes)
    .map((link) => {
      return (
        <NavBarLink
          text={link}
          href={((typeof nav_routes[link]) === 'string')
            ? nav_routes[link]
            : nav_routes[link].main}
          key={link}
        />
      )
    }
  )
}

export default NavBar