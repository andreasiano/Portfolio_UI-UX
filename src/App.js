import { useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from "./scenes/Navbar";
import Projects from "./scenes/Projects";
import Landing from "./scenes/Landing";
import Skills from "./scenes/Skills";
import Others from "./scenes/Others";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width: 1060px)")
  return (
    <div className="app outer-container rounded-md">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Landing setselectedPage={setSelectedPage} />
      <Skills/>
      <Projects />
      <Others />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
