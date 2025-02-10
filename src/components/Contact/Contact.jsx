import './Contact.css';

function Contact () {
  const contact_text = (
    <p>
      Please contact us at <a href="mailto:libraryoftransalexander@proton.me" target="_blank" rel="noreferrer">libraryoftransalexander@proton.me</a> for all inquiries, including book donations, oral history project, appointment requests to view the physical collection, and collaborations. We are also available via Signal at @ardovive.01.
      Through TinyCat, you can <a href="https://www.librarycat.org/lib/translota" target="_blank" rel="noreferrer">virtually browse our physical archives,</a> as well as our <a href="https://www.librarything.com/catalog/translota/ultimatetransmasculineliteraturelist" target="_blank" rel="noreferrer">active list of all transmasculine-authored literature.</a>
    </p>
  )
  return (
    <div className="contact-wrapper">
      <h1>Contact Information</h1>
      {contact_text}
    </div>
  );
}

export default Contact