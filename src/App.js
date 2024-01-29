import './App.css';
import { useRef } from 'react'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'
import Projects from './Pages/Projects.js'
import Experience from './Pages/Experience.js';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Experience/>
    </div>
  );
}

export default App;
