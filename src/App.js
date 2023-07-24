import Navbar from './components/Navbar';
import Home from './components/Home'
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Project from './components/Project';
import Workplace from './components/Workplace';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Capabilities from './components/Capabilities';
import Others from './components/Others';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Workplace/>
      <Skills/>
      <Capabilities/>
      <Contact/>
      <Others/>
      <SocialLinks/>
    </div>
  );
}

export default App;