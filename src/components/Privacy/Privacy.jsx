import './Privacy.css';
import { privacy_text } from '../../constants';

function Privacy () {
  return (
    <div className="privacy-wrapper">
      <h1>Data Privacy</h1>
      {privacy_text}
    </div>
  );
}

export default Privacy;