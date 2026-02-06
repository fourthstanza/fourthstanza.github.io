import { useParams } from "react-router-dom";
import { NotFound } from "./notFound.tsx"

export function ProjectPages() {
  const { slug } = useParams<{slug: string}>();

  const pages: Record<string, React.JSX.Element> = {
  }

  const page = slug && slug in pages ? pages[slug] : <NotFound />

  return (
    <>
      {page}
    </>
  );
}