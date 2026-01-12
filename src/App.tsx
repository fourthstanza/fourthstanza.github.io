/*using: lucide-react for icons*/
import { Hero } from "./sections/hero";
import { Navbar } from "./layout/navbar";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Gallery } from "./sections/gallery";
import { Contact } from "./sections/contact";



function App() {
  /*javascript logic goes here*/

  return (
    /*html goes here*/
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
          <Hero />
          <About />
          <Projects />
          <Gallery />
          <Contact />
      </main>
    </div>
  );
}

export default App
