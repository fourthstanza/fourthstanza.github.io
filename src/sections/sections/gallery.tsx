import { useParams } from "react-router"
import { GalleryEntry } from "../../components/galleryEntry";
import { Gal1Images } from "../Galleries/gal1Images";
import { Gal2Images } from "../Galleries/gal2images";
import { Gal3Images } from "../Galleries/gal3Images";
import { Gal4Images } from "../Galleries/gal4images";
import { Gal5Images } from "../Galleries/gal5Images";

const images : string[][] = [
    Gal1Images,
    Gal2Images,
    Gal3Images,
    Gal4Images,
    Gal5Images,

]

const galleryTitlesEN : string[] = [
    "Scenes from Eastern Canada",
    "Experiments in B&W Photography",
    "Rural in the Eastern Townships",
    "Urban in the Eastern Townships",
    "Liminal"
]

const galleryParagraphsEN  : string[] = [
    "A series of photographs taken during a trip though the eastern provinces of Canada.",
    "Assorted unattached images from experimentation of home developed black and white film in bulk rolling and intentional light leaks, development times and methods, and subjects or styles.",
    "Part of an ongoing project to document the environment that I occupied for the first couple decades of my life, the outskirts of the towns and villages in southern Quebec.",
    "Part of an ongoing project to document the environment that I occupied for the first couple decades of my life, the outskirts of the towns and villages in southern Quebec.",
    "Spaces that are empty, uncanny, and strange."


]

const galleryTitlesFR : string[] = [
    "Scènes de Terre-Neuve",
    "Expérimentations en photographie N&B",
    "La campagne dans les Cantons-de-l'Est"
]

const galleryParagraphsFR : string[] = [
    "Une série de photographes prises pendant un voyage aux provinces de l'est de Canada.",
    "Images diverses non liées issues d'expérimentations avec des films noir et blanc développés à la maison, en des fuites de lumière intentionnelles, des temps et methodes de développement et des sujets ou styles variés.",
    "Un projet en cours visant à documenter l'environnement que j'ai occupé pendant les deux premières décennies de ma vie, la périphérie des villes et des villages du sud du Québec."
]

const pages : string[] = [
    "gallery1",
    "gallery2",
    "gallery3",
    "gallery4",
    "gallery5"
]

const dictFR = {
    title : "Galerie d'Images"
}

const dictEN = {
    title : "Image Gallery"
}

export const Gallery = () => {

    const {lang} = useParams<{ lang: string}>();
    const galleryTitles = lang === "fr" ? galleryTitlesFR : galleryTitlesEN;
    const galleryParagraphs = lang === "fr" ? galleryParagraphsFR : galleryParagraphsEN;
    const dict = lang === "fr" ? dictFR : dictEN

    const len = images.length;

    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
            <section className="items-center overflow-hidden py-30 flex justify-center">
                    <section className="items-center overflow-hidden">
                        <div className="md:px-4 py-10 animate-fade-in flex justify-center">
                            <h2 className="text-4xl font-bold mb-4 text-text">
                                {dict.title}
                            </h2>
                        </div>
                        <div className="mx-auto px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-10 py-10 animate-fade-in-2 content-center">
                                {Array.from({length:len}).map((_, i) => (
                                    <div className="flex justify-center items-start min-h-190">
                                    <GalleryEntry
                                        images={images[i].sort(() => Math.random() - 0.5)}
                                        title={galleryTitles[i]}
                                        paragraph={galleryParagraphs[i]}
                                        link={pages[i]}
                                    />
                                    </div>
                                ))}
                            </div>
                        </div>
                </section>
            </section>
    </article>
    )
};