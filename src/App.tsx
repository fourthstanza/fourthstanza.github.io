import {Route, HashRouter as Router, Routes} from "react-router";
import { Navbar } from "./layout/navbar";
import { Footer } from "./layout/footer";
import { About } from "./sections/sectionsEN/about";
import { Projects } from "./sections/sectionsEN/projects";
import { Gallery } from "./sections/sectionsEN/gallery";
import { Contact } from "./sections/sectionsEN/contact";
import { NotFound } from "./sections/sectionsEN/notFound";
import { AboutFR } from "./sections/sectionsFR/aboutFR";
import { ProjectsFR } from "./sections/sectionsFR/projectsFR";
import { GalleryFR } from "./sections/sectionsFR/galleryFR";
import { ContactFR } from "./sections/sectionsFR/contactFR";

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
          <Route path="en/about" element={<About />} />
          <Route path="en/projects" element={<Projects />} />
          <Route path="en/gallery" element={<Gallery />} />
          <Route path="en/contact" element={<Contact />} />
          <Route path="fr/about" element={<AboutFR />} />
          <Route path="fr/projects" element={<ProjectsFR />} />
          <Route path="fr/gallery" element={<GalleryFR />} />
          <Route path="fr/contact" element={<ContactFR />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App
