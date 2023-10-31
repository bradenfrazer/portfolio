import "@fontsource-variable/quicksand";
import "@fontsource-variable/overpass";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Links } from "./components/Links";
import { Nav } from "./components/Nav";
import { Work } from "./components/Work";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Links />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
