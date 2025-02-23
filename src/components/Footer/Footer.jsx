import NavBar from '../NavBar/NavBar';
import './Footer.css';

function ContactList() {
  contacts = (
    {
      label: 'email',
      link: '',
      icon: '',
    },
    {
      label: 'instagram',
      link: '',
      icon: '',
    },
    {
      label: 'bluesky',
      link: '',
      icon: '',
    },
    {
      label: 'venmo',
      link: '',
      icon: '',
    }
  );
  return (
    <div className="contactlist-wrapper">
      {contacts.map(() => {
        <Link to={contact.link}>contact.label</Link>
      })}
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