import { useParams } from "react-router-dom";
import { Gallery1 } from "../Galleries/gallery1.tsx"
import { Gallery2 } from "../Galleries/gallery2.tsx"
import { Gallery3 } from "../Galleries/gallery3.tsx"
import { Gallery4 } from "../Galleries/gallery4.tsx"
import { Gallery5 } from "../Galleries/gallery5.tsx"
import { Gallery6 } from "../Galleries/gallery6.tsx"
import { NotFound } from "./notFound.tsx"

export function GalleryPages() {
  const { id } = useParams<{id: string}>();

  const pages: Record<string, React.JSX.Element> = {
    gallery1 : <Gallery1 />,
    gallery2 : <Gallery2 />,
    gallery3 : <Gallery3 />,
    gallery4 : <Gallery4 />,
    gallery5 : <Gallery5 />,
    gallery6 : <Gallery6 />
  }

  const page = id && id in pages ? pages[id] : <NotFound />

  return (
    <>
      {page}
    </> 
  );
}