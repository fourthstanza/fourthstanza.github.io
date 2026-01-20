import { Navbar } from "@/layout/navbar";
import { About } from "@/sections/sectionsEN/about";
import { Projects } from "@/sections/sectionsEN/projects";
import { Gallery } from "@/sections/sectionsEN/gallery";
import { Contact } from "@/sections/sectionsEN/contact";
import { Footer } from "@/layout/footer";

import {AboutFR} from "@/sections/sectionsFR/aboutFR";
import {ProjectsFR} from "@/sections/sectionsFR/projectsFR";
import {GalleryFR} from "@/sections/sectionsFR/galleryFR";
import {ContactFR} from "@/sections/sectionsFR/contactFR";


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
