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
      style={{background_color: '#f9fafb', color:'#111827'}}
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
          style={{background_color: '#ffffff', border_color: '#6b7280', color:'#111827'}}
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
          style={{background_color: '#ffffff', border_color: '#6b7280', color: '#111827'}}
          type="text"/>
      </div>
      <input
        aria-hidden="true"
        autocomplete="off"
        name="h[url]"
        novalidate=""
        style={{display: 'none'}}
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
        <button class="button button--cta button--large" style={{background_color: '#047857', color: '#f9fafb'}}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Footer;