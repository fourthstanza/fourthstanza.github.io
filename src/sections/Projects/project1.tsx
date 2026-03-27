import { Proj1Images } from "./proj1Images"
import { useState } from "react"
import { ImageHighlight } from "../../components/imageHighlight";
import { useParams } from "react-router";

const dictEN = {
    title: "Learn how to code your own orbit simulations; no black boxes involved.",
    p1: "This Jupyter notebook was created to teach undergraduate students how to simulate physical systems from scratch. It covers topics such as numerical integration, the n-body problem, and hybrid integrators. The notebook is designed to be accessible to beginners, and I provide detailed explanations of the code and the underlying physics concepts. Working through this notebook should help guide your understanding of how to simulate physical systems."
}

const dictFR = {
    title: "Apprenez à programmez vos propres simulations d'orbites; aucune boîte noire impliquée.",
    p1: "Ce cahier Jupyter a été créé pour enseigner aux étudiants de premier cycle comment simuler des systèmes physiques à partir de zéro. Il couvre des sujets tels que l'intégration numérique, le problème à n corps et les intégrateurs hybrides. Le cahier est conçu pour être accessible aux débutants, et je fournis des explications détaillées du code et des concepts physiques sous-jacents. Travailler sur ce cahier devrait vous aider à comprendre comment simuler des systèmes physiques."
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