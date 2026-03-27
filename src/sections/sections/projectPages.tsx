import { useParams } from "react-router-dom";
import { Project1 } from "../Projects/project1.tsx";
import { NotFound } from "./notFound.tsx";

export function ProjectPages() {
  const { slug } = useParams<{slug: string}>();

  const pages: Record<string, React.JSX.Element> = {
    project1 : <Project1 />,
  }

  const page = slug && slug in pages ? pages[slug] : <NotFound />

  return (
    <>
      {page}
    </>
  );
}