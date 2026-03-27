import { Proj1Images } from "./proj1Images"
import { useState } from "react"
import { ImageHighlight } from "../../components/imageHighlight";
import { useParams } from "react-router";

const dictEN = {
    title: "Learn to code your own orbit simulations.",
    p1: "This Jupyter notebook is a piece of educational material I created to teach undergraduate students the basics of simulating physical systems from scratch."
}

const dictFR = {
    title: "Apprenez à programmez vos propres simulations d'orbites.",
    p1: "Ce cahier Jupyter est un matériel pédagogique que j'ai créé pour enseigner aux étudiants de premier cycle les bases de la simulation de systèmes physiques à partir de zéro."
}

export const Project1 = () => {

    const [activeImage, setActiveImage] = useState<string | null>(null);

    const lang = useParams().lang
    const dict = lang === "fr" ? dictFR : dictEN

    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
        <section className="items-center overflow-hidden py-30 flex justify-center">
            <section className="items-center overflow-hidden mx-20 lg:px-6">
                <div className="columns-1 justify-center gap-10 py-10 animate-fade-in-2 content-center">
                    <h2 className="text-text font-bold text-2xl mb-5 max-w-4xl">
                        {dict.title}
                    </h2>
                    <div className="py-5 max-w-4xl">
                        <img src={Proj1Images[0]} onClick={() => setActiveImage(Proj1Images[0])} className="rounded-md cursor-pointer"></img>
                    </div>
                    <p className="text-text text-lg mb-5 max-w-4xl">
                        {dict.p1}
                    </p>
                    
                </div>
                {activeImage && (
                    <ImageHighlight
                    src = {activeImage}
                    onClose={() => setActiveImage(null)}
                    />
                )}
            </section>
        </section>
    </article>
    )
}