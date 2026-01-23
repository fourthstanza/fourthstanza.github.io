import {Route, HashRouter as Router, Routes} from "react-router";
import { Navbar } from "./layout/navbar";
import { About } from "./sections/sectionsEN/about";
import { Projects } from "./sections/sectionsEN/projects";
import { Gallery } from "./sections/sectionsEN/gallery";
import { Contact } from "./sections/sectionsEN/contact";
import { Footer } from "./layout/footer";

/*import {AboutFR} from "@/sections/sectionsFR/aboutFR";
import {ProjectsFR} from "@/sections/sectionsFR/projectsFR";
import {GalleryFR} from "@/sections/sectionsFR/galleryFR";
import {ContactFR} from "@/sections/sectionsFR/contactFR";8?*/


function App() {
  /*javascript logic goes here*/

  return (
    /*html goes here*/
    <Router>
    <div className="min-h-screen overflow-x-hidden text-text">
      <Navbar />
      <main>
        <Routes>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App
