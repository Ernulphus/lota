import './About.css';
import { history_text } from '../../constants';

function About() {
  return (
    <div className="about-wrapper">
      <div className='history-wrapper'>
        <h1>
          History
        </h1>
        <p>
          {history_text}
        </p>
      </div>
      <div className="staff-wrapper">

      </div>
    </div>
  );
}

export default About;