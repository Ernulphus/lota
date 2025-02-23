import InstagramIcon from '@mui/icons-material/Instagram';
import BlueskyIcon from './bluesky-stroke-rounded.svg';
import VenmoIcon from './icons8-venmo-50.png';

import { Link } from 'react-router-dom';
import './Footer.css';

function ContactList() {
  const contacts = [
    {
      label: 'email',
      link: '',
    },
    {
      label: 'instagram',
      link: '',
      icon: InstagramIcon,
    },
    {
      label: 'bluesky',
      link: '',
      icon: (<img href={BlueskyIcon} alt='Blue Sky icon' />),
    },
    {
      label: 'venmo',
      link: '',
      icon: (<img href={VenmoIcon} alt='Venmo icon' />),
    }
  ];
  return (
    <div className="contactlist-wrapper">
      {contacts.map(( contact ) => (
        <Link to={contact.link}>
          {
            contact.icon
              ? contact.label
              : contact.icon
          }
        </Link>
      ))}
    </div>
  );
}

function Footer () {
  return (
    <div className='footer-wrapper'>
      <h2>Contact us!</h2>
      <ContactList />
    </div>
  );
}

export default Footer;