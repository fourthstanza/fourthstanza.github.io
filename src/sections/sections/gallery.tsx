import { useParams } from "react-router"
//import { Link } from "react-router"
import { GalleryEntry } from "../../components/galleryEntry";
import { Gal1Images } from "../Galleries/gal1Images";
import { Gal2Images } from "../Galleries/gal2images";

const galleryTitlesEN = {
    gal1 : "Scenes from La Manche",
    gal2 : "Experiments in B&W Photography"
}

const galleryParagraphsEN = {
    gal1 : "A series of photographs taken from La Manche national park in Newfoundland.",
    gal2 : "Assorted unattached images from experimentation of home developed black and white film in bulk rolling and intentional light leaks, development times and methods, and subjects or styles."
}

const galleryTitlesFR = {
    gal1 : "Scènes de La Manche",
    gal2 : "Expérimentations en photographie N&B"
}

const galleryParagraphsFR = {
    gal1 : "Une série de photographes prises dans le parc national de La Manche à Terre-Neuve.",
    gal2 : "Images diverses non liées issues d'expérimentations avec des films noir et blanc développés à la maison, en des fuites de lumière intentionnelles, des temps et methodes de développement et des sujets ou styles variés."
}

const dictFR = {
    title : "Gallerie d'Images"
}

const dictEN = {
    title : "Image Gallery"
}

export const Gallery = () => {

    const lang = useParams().lang;
    const galleryTitles = lang === "fr" ? galleryTitlesFR : galleryTitlesEN;
    const galleryParagraphs = lang === "fr" ? galleryParagraphsFR : galleryParagraphsEN;
    const dict = lang === "fr" ? dictFR : dictEN

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
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-10 py-10 animate-fade-in-2">
                            <div>
                                <GalleryEntry
                                    images={Gal1Images}
                                    title={galleryTitles.gal1}
                                    paragraph={galleryParagraphs.gal1}
                                />
                            </div>
                            <div>
                                <GalleryEntry
                                    images={Gal2Images}
                                    title={galleryTitles.gal2}
                                    paragraph={galleryParagraphs.gal2}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    </article>
    )
};