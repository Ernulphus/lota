import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Funding from './components/Funding/Funding';
import Contact from './components/Contact/Contact';
import Submissions from './components/Submit_Donate/Submit';
import LibVsArchive from './components/LibVsArchive/LibVsArchive';
import Privacy from './components/Privacy/Privacy';
import OralHistory from './components/OralHistory/OralHistory';
import Events from './components/Events/Events';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='app-container'>
          <Header />
          <div className='app-spacer'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lota" element={<Home />} />
              <Route index element={<Home />} />
              
              <Route path="About" element={<About />} />
              <Route path="Funding" element={<Funding />} />
              <Route path="LibraryVsArchive" element={<LibVsArchive />} />
              <Route path="Privacy" element={<Privacy />} />

              <Route path="Submissions" element={<Submissions />} />
              <Route path="OralHistory" element={<OralHistory />} />
              
              <Route path="Contact" element={<Contact />} />

              <Route path="Events" element={<Events />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
