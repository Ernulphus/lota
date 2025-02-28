import InstagramIcon from './ContactIcons/instagram-svgrepo-com.svg';
// import BlueskyIcon from './ContactIcons/bluesky-stroke-rounded.svg';
import VenmoIcon from './ContactIcons/icons8-venmo-50.png';

import { Link } from 'react-router-dom';
import './Footer.css';

function ContactList() {
  const contacts = [
    {
      label: 'email',
      link: 'mailto:libraryoftransalexander@proton.me',
    },
    {
      label: 'instagram',
      link: 'https://www.instagram.com/libraryoftransalexander/',
      icon: InstagramIcon,
      alt: 'Instagram icon',
    },
    // {
    //   label: 'bluesky',
    //   link: '',
    //   icon: BlueskyIcon,
    //   alt: 'Blue Sky icon',
    // },
    {
      label: 'venmo',
      link: 'https://account.venmo.com/u/libraryoftransalexander',
      icon: VenmoIcon,
      alt: 'Venmo icon',
    }
  ];
  return (
    <div className="contactlist-wrapper">
      {contacts.map(( contact ) => (
        <Link target='_blank' rel='noreferrer' to={contact.link}>
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