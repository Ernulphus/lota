import { IoLogoVenmo } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { SiProtonmail } from "react-icons/si";

import { Link } from 'react-router-dom';
import './Footer.css';

function ContactList() {
  const contacts = [
    {
      label: 'venmo',
      link: 'https://account.venmo.com/u/libraryoftransalexander',
      icon: <IoLogoInstagram />,
      alt: 'Venmo icon',
    },
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
  ];
  return (
    <div className="contactlist-wrapper">
      {contacts.map(( contact ) => (
        <Link target='_blank' rel='noreferrer' to={contact.link}>
          {
            contact.icon && contact.alt
              ? (
                  <div className="contactlist-link">
                    {contact.icon}
                    <p>{contact.link}</p>
                  </div>
                )
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
      <h1>Contact us!</h1>
      <NewsletterSignupForm />
      <ContactList />
    </div>
  );
}

function NewsletterSignupForm() {
  return (
    <form
      action="https://app.keila.io/forms/nfrm_dj3jymRJ"
      className="contact-form"
      method="post"
    >
      <h1>
        Sign up for our Newsletter:
      </h1>
      <div>
        <label for="contact_email">
          Email
        </label>
        <input
          id="contact_email"
          name="contact[email]"
          type="email"
        />
      </div>
      <div>
        <label for="contact_first_name">
          First name (optional)
        </label>
        <input
          id="contact_first_name"
          name="contact[first_name]"
          type="text"/>
      </div>
      <input
        aria-hidden="true"
        autocomplete="off"
        name="h[url]"
        novalidate=""
      />
      <div>
        <div
          class="h-captcha"
          data-sitekey="a1c5fab7-71df-4ea4-af75-87a3d07c61de"
          data-theme="dark"
        >
        </div>
        <script async="" defer="" src="https://hcaptcha.com/1/api.js">
        </script>
      </div>
      <div>
        <input type="submit" value="Submit" className="contact-form-submit"/>
      </div>
    </form>
  );
}

export default Footer;