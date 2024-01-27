import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Gallery from './pages/Gallery.js'
import './App.css';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
  );
}

export default App;
