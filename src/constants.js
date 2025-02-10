import { Link } from "react-router-dom";

const nav_routes = {
  'Home': '/',
  'About': 'About',
  'Submit/Donate': 'Donate',
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

export {
  history_text,
  nav_routes,
  nav_links,
}