import './App.css';
// import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Scrolltop from './Components/ScrollTop';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About'
import Benefits from './Components/Benefits'
import Media from './Components/Media'
import Contact from './Components/Contact'
import Systems from './Components/Systems'
import Sustainability from './Components/Sustainability'
import Textilesourcing from './Components/Textilesourcing';
import Socksmanufacturer from './Components/Socksmanufacturer';
import Mainheader from './Components/Mainheader';
import Typedetails from './Components/Typedetails';
import Cottonyarn from './Components/Cottonyarn';
import Dtyyarns from './Components/Dtyyarns';

function App() {
  return (
    <div className="App">
      <Router>
        <Mainheader />
        <Navbar />
        <Scrolltop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/our-system' element={<Systems />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/sustainability' element={<Sustainability />} />
          <Route path='/socks-manufacturing' element={<Socksmanufacturer />} />
          <Route path='/socks-manufacturing-details' element={<Typedetails />} />
          <Route path='/textile-sourcing' element={<Textilesourcing />} />
          <Route path='/cotton-yarn' element={<Cottonyarn />} />
          <Route path='/dty-yarns' element={<Dtyyarns />} />
          <Route path='/media' element={<Media />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
