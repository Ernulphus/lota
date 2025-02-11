import { Link } from "react-router-dom";
import { nav_routes } from '../../constants';
import './NavBar.css';

function NavBar () {
  return Object.keys(nav_routes)
    .map((link) => {
      if (typeof nav_routes[link] == typeof '') {
        return (
            <Link
              className="header-nav-link"
              to={nav_routes[link]}
            >
              {link}
            </Link>
          )
      }
      else if (typeof nav_routes[link] == typeof {}) {
        return (
          <Link
            className="header-nav-link"
            to={nav_routes[link].main}
          >
            {link}
          </Link>
        )
      }
    }
  )
}

export default NavBar