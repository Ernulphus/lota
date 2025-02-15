import './Funding.css';
import { funding_text } from '../../constants';

function Funding () {
  return (
    <div className="funding-wrapper">
      <h1>Funding</h1>
      {funding_text}
    </div>
  )
}

export default Funding;