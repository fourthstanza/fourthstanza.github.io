import { Navbar } from "./layout/navbar";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Gallery } from "./sections/gallery";
import { Contact } from "./sections/contact";
import { Footer } from "./layout/footer";



function App() {
  /*javascript logic goes here*/

  return (
    /*html goes here*/
    <div className="min-h-screen overflow-x-hidden text-text">
      <Navbar />
      <main>
          <About />
          <Projects />
          <Gallery />
          <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
