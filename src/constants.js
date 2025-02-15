import adenholtz from './components/About/staffpics/adenholtz.avif';

const nav_routes = {
  'Home': '/',
  'About': {
    main: 'About',
    'Funding': 'Funding',
    'Library or Archive?': 'LibraryVsArchive',
    'Data Privacy': 'Privacy',
  },
  'Submit/Donate': {
    main: 'Submissions',
    'Oral History Project': 'OralHistory',
  },
  'Contact Us': 'Contact',
};

const history_text = (
<p>
  Library of Trans Alexander (LOTA) was born out of a conversation between Alex Avry Denholtz and Rain Dove. In that conversation, they imagined an organization that could serve as a seed silo for transmasculine literature, given what was to come only a few weeks later.
  <br />
  Alex established LOTA that same day, December 26, 2024, in Brooklyn, NY. Since its inception, LOTA has been for transmascs and by transmascs, to serve as a resource for reflection, community building, recognition, and progress.
  <br />
  Similar to our namesake, Library of Alexandria, LOTA accepts any written works-- anything that could be sent on a piece of paper. Therefore, we accept zines, comics, protest materials, lyrics, and more!
  <br />
  We are an archive born out of necessity. It is not a matter of who has the right credentials or experience, but rather what work must be done.
</p>
)

const submit_donate_text = (
  <>
    <p>
      <b>Donation:</b> literature from someone who is not the author. <br />
      <b>Submission:</b> literature from an author. <br /><br />
      Anyone can donate to our archive! Broadly speaking, we accept any physical or digital works involving written words by a self-identified transmasculine person. For collaborative projects, we ask that at least 25% of the authors identify as transmasculine. We also accept submissions written pre-transition, for which we can remove, replace, or keep any deadnames. Please see our Data Privacy page for more information.​ You can submit via P.O. Box, e-mail, or in-person in NYC. Please copy and paste the following template into an email titled "Submission/Donation" for <a href="libraryoftransalexander@proton.me" target='_blank' rel="noreferrer" >libraryoftransalexander@proton.me.</a> You will receive an email response within 72 business hours.
      <br /><br /> 
      <b>First and Last Name:</b><br />
      <b>Pronouns:</b><br />
      <b>Instagram/Website (if applicable):</b><br />
      <b>I am the author:</b> (Y/N)<br />
      <b>Works:</b>
    </p>
    <ul>
      <li>
        Last Name, First Name. Title. Condition (New/Used).<br />
      </li>
    </ul>
  </>
);

const workers = [
  {
    name: 'Alex Avry Denholtz',
    pronouns: 'they/he',
    role: 'Organizer',
    img: adenholtz,
    bio: (
      <p>
        Alex is a Master of Public Administration grad student in New York. He enjoys hosting board game nights, visiting bookstores & libraries, and walking. Their instagram is <a href='https://www.instagram.com/alexdenholtz/'>@alexdenholtz.</a>
      </p>
    ),
  }
];

const funding_text = (
  <p>
    LOTA is predominantly self-funded; please consider donating via Venmo at @libraryoftransalexander. We are working on seeking legal non-profit status and would like to begin applying to grants this summer. 
    <br />
    We are working on making our budget, revenues, and expenses fully transparent and available to the public. 
  </p>
);

const lib_archive_text = (
  <p>
    <b>Page is under construction.</b>
    <br />
    The Library of Trans Alexander is currently only operating in the capacity of an archive. This summer, we aim to open our physical archive for circulation. You can book an appointment to view specific works in NYC by emailing <a href="mailto:libraryoftransalexander@proton.me?subject=appointment">libraryoftransalexander@proton.me.</a> 
  </p>
)

const privacy_text = (
  <p>
    <b>Page is still under construction.</b>
    <br />
    Data privacy is at the core of our operations at LOTA. Please use an encrypted email or messaging service. Instagram and WhatsApp are not preferred. We use Proton and Signal. Interviewees are anonymized, their names are never digitally recorded unless explicitly agreed.  
    <br />
    Our work is conducted on a private WiFi network with a VPN, and offline whenever possible.
  </p>
)

export {
  funding_text,
  history_text,
  lib_archive_text,
  nav_routes,
  privacy_text,
  submit_donate_text,
  workers,
}