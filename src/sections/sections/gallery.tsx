import { useParams } from "react-router"
import { GalleryEntry } from "../../components/galleryEntry";
import { Gal1Images } from "../Galleries/gal1Images";
import { Gal2Images } from "../Galleries/gal2images";
import { Gal3Images } from "../Galleries/gal3Images";
import { Gal4Images } from "../Galleries/gal4Images";
import { Gal5Images } from "../Galleries/gal5Images";
import { Gal6Images } from "../Galleries/gal6Images";

const images : string[][] = [
    Gal1Images,
    Gal2Images,
    Gal3Images,
    Gal4Images,
    Gal5Images,
    Gal6Images
]

const galleryTitlesEN : string[] = [
    "Scenes from Eastern Canada",
    "Experiments in B&W Photography",
    "Rural in the Eastern Townships",
    "Urban in the Eastern Townships",
    "Liminal",
    "Nishika N8000"
]

const galleryParagraphsEN  : string[] = [
    "A series of photographs taken during a trip though the eastern provinces of Canada.",
    "Assorted unattached images from experimentation of home developed black and white film in bulk rolling and intentional light leaks, development times and methods, and subjects or styles.",
    "Part of an ongoing project to document the environment that I occupied for the first couple decades of my life, the outskirts of the towns and villages in southern Quebec.",
    "Part of an ongoing project to document the environment that I occupied for the first couple decades of my life, the outskirts of the towns and villages in southern Quebec.",
    "Spaces that are empty, uncanny, and strange.",
    "GIF's made using the N8000 compound camera system, a device initially designed for making holographic prints."


]

const galleryTitlesFR : string[] = [
    "Scènes de Terre-Neuve",
    "Expérimentations en photographie N&B",
    "La campagne dans les Cantons-de-l'Est",
    "Urbain dans les Cantons-de-l'Est",
    "Liminal",
    "Nishika N8000"
]

const galleryParagraphsFR : string[] = [
    "Une série de photographes prises pendant un voyage aux provinces de l'est de Canada.",
    "Images diverses non liées issues d'expérimentations avec des films noir et blanc développés à la maison, en des fuites de lumière intentionnelles, des temps et methodes de développement et des sujets ou styles variés.",
    "Une partie d'un projet en cours visant à documenter l'environnement que j'ai occupé pendant les deux premières décennies de ma vie, la périphérie des villes et des villages du sud du Québec.",
    "Une partie d'un projet en cours visant à documenter l'environnement que j'ai occupé pendant les deux premières décennies de ma vie, la périphérie des villes et des villages du sud du Québec.",
    "Des espaces qui sont vides, inquiétants, et etranges.",
    "Des GIF's réalisé à l'aide du système de caméra composite N8000, un appareil initialement conçu pour la réalisation d'impressions holographiques."
]

const pages : string[] = [
    "gallery1",
    "gallery2",
    "gallery3",
    "gallery4",
    "gallery5",
    "gallery6"
]

const dictFR = {
    title : "Galeries d'Images",
    subtitle: "Cliquez pour voir l'ensemble complet de chaque série."
}

const dictEN = {
    title : "Image Galleries",
    subtitle: "Click through to see the full set from each series."
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
                        <div className="md:px-4 mt-10 animate-fade-in flex justify-center">
                            <h2 className="text-4xl font-bold mb-4 text-text">
                                {dict.title}
                            </h2>
                        </div>
                        <div className="md:px-4 mb-10 animate-fade-in-2 flex justify-center">
                            <h3>
                                {dict.subtitle}
                            </h3>
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