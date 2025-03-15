import { IoLogoVenmo } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { SiProtonmail } from "react-icons/si";

import { Link } from 'react-router-dom';
import './Footer.css';

function ContactList() {
  const contacts = [
    {
      label: 'email',
      link: 'mailto:libraryoftransalexander@proton.me',
      icon: <SiProtonmail />,
      alt: 'Protonmail icon',
    },
    {
      label: 'instagram',
      link: 'https://www.instagram.com/libraryoftransalexander/',
      icon: <IoLogoVenmo />,
      alt: 'Instagram icon',
    },
    {
      label: 'venmo',
      link: 'https://account.venmo.com/u/libraryoftransalexander',
      icon: <IoLogoInstagram />,
      alt: 'Venmo icon',
    }
  ];
  return (
    <div className="contactlist-wrapper">
      {contacts.map(( contact ) => (
        <Link target='_blank' rel='noreferrer' to={contact.link}>
          {
            contact.icon && contact.alt
              ? contact.icon
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