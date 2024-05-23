import './App.css';
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar.js'
import Projects from './Pages/Projects.js'
import Experience from './Pages/Experience.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    </div>
  );
}

export default App;
