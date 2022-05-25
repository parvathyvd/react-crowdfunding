import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MasterCraft from "./components/MasterCraft";
import { useGlobalContext } from "./context/CrowdContext";

function App() {
  return (
    <>
      <Hero />
      <MasterCraft />
      <About />
      <Footer />
    </>
  );
}

export default App;
