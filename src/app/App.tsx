import {Route, HashRouter as Router, Routes} from "react-router";
import { AppLayout } from "./AppLayout"
import { About } from "../sections/sections/about";
import { Projects } from "../sections/sections/projects";
import { Gallery } from "../sections/sections/gallery";
import { Contact } from "../sections/sections/contact";
import { NotFound } from "../sections/sections/notFound";
import { GalleryPages } from "../sections/sections/galleryPages";
import { ProjectPages } from "../sections/sections/projectPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<About />} />
          <Route path=":lang">
            <Route index element={<About />} />
            <Route path="about" element={<About />} />

            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path=":slug" element={<ProjectPages />} />
            </Route>

            <Route path="gallery">
              <Route index element={<Gallery />} />
              <Route path=":id" element={<GalleryPages />} />
            </Route>

            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
