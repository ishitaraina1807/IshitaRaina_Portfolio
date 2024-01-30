import './App.css';
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'
import Projects from './Pages/Projects.js'
import Experience from './Pages/Experience.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Experience/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
