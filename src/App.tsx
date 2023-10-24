import "./App.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Work } from "./components/Work";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Footer />
    </>
  );
}

export default App;
