import InstagramIcon from './ContactIcons/instagram-svgrepo-com.svg';
import BlueskyIcon from './ContactIcons/bluesky-stroke-rounded.svg';
import VenmoIcon from './ContactIcons/icons8-venmo-50.png';

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
      alt: 'Instagram icon',
    },
    {
      label: 'bluesky',
      link: '',
      icon: BlueskyIcon,
      alt: 'Blue Sky icon',
    },
    {
      label: 'venmo',
      link: '',
      icon: VenmoIcon,
      alt: 'Venmo icon',
    }
  ];
  return (
    <div className="contactlist-wrapper">
      {contacts.map(( contact ) => (
        <Link to={contact.link}>
          {
            contact.icon && contact.alt
              ? (<img src={contact.icon} alt={contact.alt}/>)
              : (<p>{contact.label}</p>)
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