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

  const flat_routes = {}
  Object.keys(nav_routes)
    .forEach((link) => {
      if (typeof nav_routes[link] === 'string') {
        flat_routes[link] = nav_routes[link];
        return;
      }
      else if (typeof nav_routes[link] === 'object') {
        Object.keys(nav_routes[link])
          .forEach((sublink) => {
            if (sublink === 'main') {
              flat_routes[link] = nav_routes[link][sublink];
            }
            else {
              flat_routes[sublink] = nav_routes[link][sublink];
            }
            return;
          });
        return;
      }
    });
  console.log(flat_routes)

  return (
    <>
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
      <div className="nav-wrapper-flat">
        {
          Object.keys(flat_routes)
            .map((link) => {
              return (
                <NavBarLink
                  text={link}
                  href={flat_routes[link]}
                  key={link}
                />
              )
            }
          )
        }
      </div>
    </>
  )
}

export default NavBar