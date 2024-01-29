import './App.css';
import { useRef } from 'react'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'
import Projects from './Pages/Projects.js'

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;
