import adenholtz from './components/About/staffpics/adenholtz.avif';

const nav_routes = {
  'Home': '/',
  'About': {
    main: 'About',
    'Funding': 'Funding',
    'Library or Archive?': 'LibraryVsArchive',
    'Data Privacy': 'Privacy',
    // 'Upcoming Events': 'Events',
  },
  'Submit/Donate': {
    main: 'Submissions',
    'Oral History Project': 'OralHistory',
  },
  'Contact Us': 'Contact',
};

const history_text = (
<p>
  Library of Trans Alexander (LOTA) was born out of a conversation between Avry Denholtz and Rain Dove. In that conversation, they imagined an organization that could serve as a seed silo for transmasculine literature, given what was to come only a few weeks later.
  <br />
  Avry established LOTA that same day, December 26, 2024, in Brooklyn, NY. Since its inception, LOTA has been for transmascs and by transmascs, to serve as a resource for reflection, community building, recognition, and progress.
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
    name: 'Avry Denholtz',
    pronouns: 'they/he',
    role: 'Organizer',
    img: adenholtz,
    bio: (
      <p>
        Avry is a Master of Public Administration grad student in New York. They enjoy hosting board game nights, visiting bookstores & libraries, and walking. His instagram is <a href='https://www.instagram.com/avrydenholtz/'>@avrydenholtz.</a>
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

const oral_history_text = (
  <p>
    <b>Page is under construction.</b>
    <br />
    On February 1st, 2025, the Library of Trans Alexander announced our Oral History project. In this project, interviewees' responses will be transcribed and anonymized. We will collect these interviews into a zine, to be published in the summer.
    <br />
    Beginning in March, we will open the project up to group discussions around certain topics.
    <br />
    Please send an email to libraryoftransalexander@proton.me to get involved. Please copy and paste this form. We will respond within 2 business days.
    <br />
    <b>Name:</b><br />

    <b>Pronouns:</b><br />

    <b>Instagram:</b><br />

    <b>Location:</b> In-person (NYC) or virtual<br />

    <b>Availability:</b> please describe your general availability or 5 dates and times<br />
  </p>
)

const events_text = (
  <p> 
    

Tempora officiis expedita rem nihil ut. Et velit vel laudantium. Architecto et qui aliquid.

Doloremque accusamus vero dolorem placeat voluptatem inventore. Quis illo a ut autem rerum. Ut dolorem repellendus ab voluptatem. Saepe repudiandae sit qui. Nemo mollitia fuga recusandae.

Est beatae nam laborum sed perferendis veritatis et corrupti. Consequatur facilis rerum quo. Qui veritatis voluptatum eius vero enim consectetur dolores ipsa. Sunt et ducimus impedit alias consequatur. Rerum et minima sunt repellendus sint. Impedit aut molestiae est enim voluptas aut quaerat quia.

At aliquam laudantium sapiente consequuntur et placeat. Ullam quae asperiores illum in blanditiis ut laudantium. Soluta quas praesentium officiis ad sunt. Deleniti sit optio sequi. Sapiente numquam aspernatur voluptatem iure.

Quas enim non nobis. Voluptatem voluptatem culpa vero et excepturi. Quis et ea sunt dicta officia. Labore culpa sit doloribus velit aut laboriosam odit. Blanditiis ex nihil qui amet exercitationem autem dolorem. Quia voluptatem aspernatur animi soluta excepturi officiis.

  </p>
)
export {
  events_text,
  funding_text,
  history_text,
  lib_archive_text,
  nav_routes,
  oral_history_text,
  privacy_text,
  submit_donate_text,
  workers,
}