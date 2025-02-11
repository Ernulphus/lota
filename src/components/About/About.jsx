import './About.css';
import { history_text } from '../../constants';
import { workers } from '../../constants';

function Worker({
  name,
  pronouns,
  role,
  img,
  bio,
}) {
  return (
    <div className="worker-wrapper">
      <div className='avatar'>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <h2>{pronouns}</h2>
        <h2>{role}</h2>
      </div>
      <div className="bio">
        {bio}
      </div>
    </div>
  )
}

function About() {

  return (
    <div className="about-wrapper">
      <div className='history-wrapper'>
        <h1>
          History
        </h1>
        {history_text}
      </div>

      <div className="staff-wrapper">
        <h1>
          Staff
        </h1>
        <div className="staff-profiles">
          {workers.map(({name, pronouns, role, img, bio}) => (
            <Worker
              name={name}
              pronouns={pronouns}
              role={role}
              img={img}
              bio={bio}
              key={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;