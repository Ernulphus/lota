import './Home.css';
import { Link } from 'react-router-dom';
import covers from './covers.png'

function Home() {
  const home_text = 'The Library of Trans Alexander (LOTA) is the only organization solely dedicated to the preservation of transmasculine-authored literature. You can virtually browse our physical archives below or visit us in Brooklyn, NY.';

  return (
    <div className="home-wrapper">
      <div>
        <h1>
          Library of Trans Alexander
        </h1>
        <p>
          {home_text}
        </p>
        <Link>
          Browse the Collection
        </Link>
      </div>
      <img src={covers} alt="Six covers of books in the collection" className='home-covers' />
    </div>
  );
}

export default Home;