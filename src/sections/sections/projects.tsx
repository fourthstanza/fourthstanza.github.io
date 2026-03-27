import { useParams } from "react-router"
import { ProjectEntry } from "../../components/projectEntry";
import { Proj1Images } from "../Projects/proj1Images";

const images : string[][] = [
    Proj1Images,
]

const projectTitlesEN : string[] = [
    "Orbital Dynamics Worksheet",
]

const projectParagraphsEN  : string[] = [
    "A worksheet designed as learning material for an undergraduate student with a strong understanding of calculus and some knowledge of orbital mechanics, but no prior experience with computational physics. It covers the basics of taking definite integrals and shows you how to start coding your own orbital dynamics simulations.",
]

const projectTitlesFR : string[] = [
    "Feuille de travail sur la dynamique orbitale",
]

const projectParagraphsFR : string[] = [
    "Une feuille de travail conçue comme matériel d'apprentissage pour un étudiant de premier cycle ayant une solide compréhension du calcul et une certaine connaissance de la mécanique orbitale, mais aucune expérience préalable de la physique computationnelle. Elle couvre les bases de la prise d'intégrales définies et vous montre comment commencer à coder vos propres simulations de dynamique orbitale.",
]

const pages : string[] = [
    "project1",
]

//const dictFR = {
//    title : "Vitrine de Projets",
//    subtitle: "Voici une sélection de mes projets. Cliquez pour voir plus de détails et d'images de chacun d'eux."
//}

//const dictEN = {
//    title : "Project Showcase",
//    subtitle: "See here a selection of my projects. Click through to see more details and images from each one."
//}


export const Projects = () => {
    
    const {lang} = useParams<{ lang: string}>();
    const projectTitles = lang === "fr" ? projectTitlesFR : projectTitlesEN;
    const projectParagraphs = lang === "fr" ? projectParagraphsFR : projectParagraphsEN;
    {/*const dict = lang === "fr" ? dictFR : dictEN*/} //dict is currently unused but will be used when the text content of the page is added

    const len = images.length;

    return (
        <article className="h-auto relative min-h-screen">
            {/*background image*/}
            <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
                <section className="items-center overflow-hidden py-30 flex justify-center">
                        <section className="items-center overflow-hidden px-3">
                            <div className="md:px-4 mt-10 animate-fade-in flex justify-center">
                                {/*<h2 className="text-4xl font-bold mb-4 text-text">
                                    {dict.title}
                                </h2>*/}
                            </div>
                            <div className="md:px-4 mb-10 animate-fade-in-2 flex justify-center text-center">
                                {/*<h3>
                                    {dict.subtitle}
                                </h3>*/}
                            </div>
                            <div className="mx-auto px-6">
                                <div className="grid grid-cols-1 justify-center gap-10 py-10 animate-fade-in-2 content-center">
                                    {Array.from({length:len}).map((_, i) => (
                                        <div className="flex justify-center items-start min-h-190">
                                        <ProjectEntry
                                            images={images[i].sort(() => Math.random() - 0.5)}
                                            title={projectTitles[i]}
                                            paragraph={projectParagraphs[i]}
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