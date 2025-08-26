import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Cards />
      <Contact />
    </>
  );
}

export default App;
