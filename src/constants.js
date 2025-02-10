import { Link } from "react-router-dom";

const nav_routes = {
  'Home': '/',
  'About': 'About',
  'Submit/Donate': 'Donate',
  'Contact Us': 'Contact',
};

const nav_links = Object.keys(nav_routes)
.map((link) => (
  <Link
    className="header-nav-link"
    to={nav_routes[link]}
  >
    {link}
  </Link>
));

export {
  nav_routes,
  nav_links,
}