import './NextSteps.css';
import logo from './Lota Logo White.avif';

function NextSteps() {
  return (
    <div className="next-steps">
      <div className="next-steps-logo-wrapper">
        <img src={logo} alt="LOTA logo"/>
      </div>
      <div className='next-steps-body-wrapper'>
        <article className="next-steps-body">
          <h1>LOTA's Next Steps</h1>
          <p>
            I am excited to announce that LOTA's collection will be donated to NYC Trans Archives!
          </p>
          <p>
            The community response to LOTA has been so inspiring and beautiful. I am grateful for all the love, support, and literature people have given to the library.
          </p>
          <p>
            I will continue Library of Trans Alexander's mission of preserving transmasc-authored literature at NYC Trans Archives. I believe this evolution of the library will be for the benefit of the TGNC community, and am grateful to work with a passionate and experienced group. I hope you'll join us at @transarchives!
          </p>
          <p>Onwards and upwards,<br />
            Avry Denholtz<br />
            LOTA Founder
          </p>
       </article>
      </div>
      <div className="next-steps-footer" />
    </div>
  );
}

export default NextSteps;