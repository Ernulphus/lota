import { Link } from "react-router-dom";
import adenholtz from './components/About/staffpics/adenholtz.avif';

const nav_routes = {
  'Home': '/',
  'About': 'About',
  'Submit/Donate': 'Submissions',
  'Contact Us': 'Contact',
};

const nav_links = Object.keys(nav_routes)
.map((link) => (
  <Link
    className="header-nav-link"
    to={nav_routes[link]}
  >
    {link}
  </Link>
));

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
    <ul>
      <li>
        Last Name, First Name. Title. Condition (New/Used).<br />
      </li>
    </ul>
  </p>
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
]

export {
  history_text,
  nav_routes,
  nav_links,
  submit_donate_text,
  workers,
}