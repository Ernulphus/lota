import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Submissions from './components/Submit_Donate/Submit';

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
              <Route path="lota" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Submissions" element={<Submissions />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
