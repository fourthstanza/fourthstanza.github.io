import { useParams } from "react-router"
//import { Link } from "react-router"
import { GalleryEntry } from "../../components/galleryEntry";
import { Gal1Images } from "../Galleries/gal1Images";
import { Gal2Images } from "../Galleries/gal2images";

const galleryTitlesEN = {
    gal1 : "Scenes from La Manche",
    gal2 : "Experiments in B&W Photography // 2024"
}

const galleryParagraphsEN = {
    gal1 : "A series of photographs taken from La Manche national park in Newfoundland.",
    gal2 : "The first set of images produced during my indroduction to self development and scanning of black and white film in 2024."
}

const galleryTitlesFR = {
    gal1 : "Scènes de La Manche",
    gal2 : "Expérimentations en photographie N&B // 2024"
}

const galleryParagraphsFR = {
    gal1 : "Une série de photographies prises dans le parc national de La Manche à Terre-Neuve.",
    gal2 : "Les premières images réalisées lors de mon initiation au développement personnel et à la numérisation de films noir et blanc en 2024."
}

export const Gallery = () => {

    const lang = useParams().lang;
    const galleryTitles = lang === "fr" ? galleryTitlesFR : galleryTitlesEN;
    const galleryParagraphs = lang === "fr" ? galleryParagraphsFR : galleryParagraphsEN;

    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
            <section className="items-center overflow-hidden py-30 flex justify-center">
                    <section className="items-center overflow-hidden">
                    <div className="mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-10 py-10">
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