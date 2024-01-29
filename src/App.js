import './App.css';
import { useRef } from 'react'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Skills/>
    </div>
  );
}

export default App;
