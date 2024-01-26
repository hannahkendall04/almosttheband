import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Gallery from './pages/Gallery.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/almosttheband" element={<Home/>} />
        <Route path="/almosttheband/about" element={<About/>} />
        <Route path="/almosttheband/contact" element={<Contact/>} />
        <Route path="/almosttheband/gallery" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
