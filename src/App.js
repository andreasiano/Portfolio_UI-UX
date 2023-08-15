import Navbar from "./scenes/Navbar";
import Projects from "./scenes/Projects";
import Landing from "./scenes/Landing";
import Skills from "./scenes/Skills";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Others from "./scenes/Others";

function App() {
  return (
    <div className="app outer-container rounded-md">
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Others/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
