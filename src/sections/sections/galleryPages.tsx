import { useParams } from "react-router-dom";
import { Gallery1 } from "../Galleries/gallery1.tsx"
import { Gallery2 } from "../Galleries/gallery2.tsx"
import { NotFound } from "./notFound.tsx"

export function GalleryPages() {
  const { id } = useParams<{id: string}>();

  const pages: Record<string, React.JSX.Element> = {
    gallery1 : <Gallery1 />,
    gallery2 : <Gallery2 />
  }

  const page = id && id in pages ? pages[id] : <NotFound />

  return (
    <>
      {page}
    </> 
  );
}