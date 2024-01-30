import './App.css';
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'
import Projects from './Pages/Projects.js'
import Experience from './Pages/Experience.js';
import About from './Pages/About.js';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Experience/>
    <About/>
    </div>
  );
}

export default App;
