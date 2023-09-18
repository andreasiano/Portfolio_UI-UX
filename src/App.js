import Navbar from "./scenes/Navbar";
import Projects from "./scenes/Projects";
import Landing from "./scenes/Landing";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Map from "./scenes/Map";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <Map/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
