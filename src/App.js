import './App.css';
import Gallery from './components/gallery';
import Navbar from './components/navbar';
import About from './components/About';
import BloodCamps from './components/BloodCamps';
import Footer from './components/Footer';

function App(){
return(
  <div className="App">
    <Navbar />
    <Gallery />
    <About />
    <BloodCamps />
    <Footer />
  </div>
);
}
export default App;
