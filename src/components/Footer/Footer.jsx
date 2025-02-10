import './Footer.css';
import { nav_links } from '../../constants';

function Footer () {
  return (
    <div className='footer-wrapper'>
      {nav_links}
    </div>
  );
}

export default Footer;