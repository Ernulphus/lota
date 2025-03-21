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
      <Newsletter />
      <ContactList />
    </div>
  );
}

function Newsletter() {
<form action="https://app.keila.io/forms/nfrm_dj3jymRJ" class="contact-form container bg-white rounded py-4 md:py-8 flex flex-col gap-4" method="post" style="background-color:#f9fafb!important;color:#111827!important">
  <h1 class="text-4xl my-4">
    Sign up for our Newsletter!
  </h1>
  <div class="flex flex-col">
    <label for="contact_email">
      Email
    </label>
    <input id="contact_email" name="contact[email]" style="background-color:#ffffff!important;border-color:#6b7280!important;color:#111827!important" type="email"/>
  </div>
  <div class="flex flex-col">
    <label for="contact_first_name">
      First name (optional)
    </label>
    <input id="contact_first_name" name="contact[first_name]" style="background-color:#ffffff!important;border-color:#6b7280!important;color:#111827!important" type="text"/>
  </div>
  <input aria-hidden="true" autocomplete="off" name="h[url]" novalidate="" style="display: none"/>
  <div class="flex flex-col">
    <div class="h-captcha" data-sitekey="a1c5fab7-71df-4ea4-af75-87a3d07c61de" data-theme="dark">
    </div>
    <script async="" defer="" src="https://hcaptcha.com/1/api.js">
    </script>
  </div>
  <div class="flex justify-start">
    <button class="button button--cta button--large" style="background-color:#047857!important;color:#f9fafb!important">
      Submit
    </button>
  </div>
</form>
}

export default Footer;