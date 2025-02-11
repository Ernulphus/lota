import './Submit.css';
import { submit_donate_text } from '../../constants';

function Submissions() {
  return (
    <div className='submissions-wrapper'>
      <h1>Submissions & Donations</h1>
      {submit_donate_text}
    </div>
  );
}

export default Submissions;