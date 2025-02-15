import { useState } from "react";
import { Link } from "react-router-dom";
import { nav_routes } from '../../constants';
import './NavBar.css';

function NavBarLink ({ text, href, children }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Link
        className="nav-link"
        to={href}
      >
        {text}
        {isHovering && children}
      </Link>
    </div>
  );
}

function NavBarSubLinks ({ subroutes }){
  return (
    <div className="nav-sub-links">
      {
        Object.keys(subroutes).map(( link ) => {
          return (link !== 'main') &&
          (
            <Link to={subroutes[link]}>
              {link}
            </Link>
          );
        })
      }
    </div>
  );
}
  
function NavBar () {

  return (
    <div className="nav-wrapper">
      {
        Object.keys(nav_routes)
          .map((link) => {
            return (
              <>
                <NavBarLink
                  text={link}
                  href={typeof nav_routes[link] === 'string'
                    ? nav_routes[link]
                    : nav_routes[link].main}
                  key={link}
                >
                  {
                    typeof nav_routes[link] === 'object'
                    && (<NavBarSubLinks subroutes={nav_routes[link]} />)
                  }
                </NavBarLink>
              </>
            )
          }
        )
      }
    </div>
  )
}

export default NavBar