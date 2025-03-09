import './Events.css';
import {events_text} from '../../constants';
import partyrats from './eventpics/partyrats.jpg';

function Events() {
  return (
    <div className="events-wrapper">
      <h1>
        Events
      </h1>
      <div className='events-text-wrapper'>
        {events_text}
        {events_text}
      </div>
      <img src={partyrats} alt='rats jamming out' />
    </div>
  );
}

export default Events;