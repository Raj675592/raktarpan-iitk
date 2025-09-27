import './App.css';

import Gallery from './components/gallery';
import Navbar from './components/navbar';
import About from './components/About';
import BloodCamps from './components/BloodCamps';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Bloodfact from './components/BloodFacts';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/camps" element={<BloodCamps />} />
        <Route path="/Facts" element={<Bloodfact />} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;
