import './OralHistory.css';
import { oral_history_text } from '../../constants';

function OralHistory () {
  return (
    <div className="oral-history-wrapper">
      <h1>Oral History Project</h1>
      {oral_history_text}
    </div>
  )
}

export default OralHistory;