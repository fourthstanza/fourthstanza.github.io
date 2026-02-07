import { useState } from "react";
import { useParams } from "react-router";

type EntryProps = {
  images: string[];
  title: string;
  paragraph: string;
  link: string
};

export const GalleryEntry = ({ images, title, paragraph, link }: EntryProps) => {

    const lang = useParams().lang

    const imagesTrunc = images.length <= 6 ? images : images.slice(0,6)

    const [index, setIndex] = useState(0);

    const prev = () =>
    setIndex((i) => (i === 0 ? imagesTrunc.length - 1 : i - 1));

    const next = () =>
    setIndex((i) => (i === imagesTrunc.length - 1 ? 0 : i + 1));

    return (
    <div className="relative w-19/20 hover:w-full max-w-lg overflow-hidden rounded-lg drop-shadow-lg drop-shadow-footer-background">
      {/* Image */}
      <img
        src={imagesTrunc[index]}
        alt=""
        className="aspect-square w-full object-cover"
      />

      {/* Left button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2
                   rounded-full bg-black/50 p-2 text-white
                   hover:bg-black/70"
      >
        ‹
      </button>

      {/* Right button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   rounded-full bg-black/50 p-2 text-white
                   hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {imagesTrunc.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Title & description */}
      <a className="bg-background-bottom min-h-60 text-text p-5 block" href={"/#/"+lang+"/gallery/"+link}>
        <h1 className="mb-4 text-xl font-medium">
            {title}
        </h1>
        <div className="border-t border-surface-gray/20 pt-8"></div>
        <p className="mb-4 font-medium">
            {paragraph}
        </p>
      </a>
    </div>
  );
}

