import aboutImage from "@/assets/images/about_image.jpg";

export const AboutFR = () => {
    return (
    <article className="h-auto relative min-h-screen">
        {/*background images*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
        <img src="/glass_blur_grain.png" className="min-h-screen absolute bottom-0 w-full -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100% rotate-180"/>
        {/*Content*/}
        {/*About section*/}
        <section className="items-center overflow-hidden py-20">
            <div className="relative flex items-center mt-25 mx-5">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 py-5 items-center">
                        {/*image*/}
                        <div>
                            <img src={aboutImage} alt="About Image" className="w-full h-auto shadow-2xl shadow-footer-background" />
                        </div>
                        {/*text*/}
                        <div className="md:px-4 py-10 animate-fade-in">
                            <h2 className="text-4xl font-bold mb-4 text-text">Bienvenue sur ma page.</h2>
                            <p className="mb-4 md:text-xl font-medium text-text">
                                Bonjour! Je m'appelle Matthew. Je suis un jeune assistant de recherche/ingénieur logiciel passionné, avec une formation en astrophysique et en informatique. Je me spécialise dans la modélisation des systèmes dynamiques et l'application pratique de l'apprentissage automatique.
                                Je crois fermement à l'importance de faire les choses soi-même et d'apprendre continuellement de nouvelles compétences.
                            </p>
                            <p className="mb-4 md:text-xl font-medium text-text">
                                Lorsque je ne suis pas plongé dans la recherche, j'aime explorer la photographie et bricoler avec des projets électroniques comme moyens d'expression créative.
                                Vous trouverez ici une présentation de mes projets et de mes travaux, ainsi qu'une galerie d'images en lien avec mon travail et avec mes intérêts artistiques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Spotify embeds section*/}
        <section className="items-center overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="md:text-4xl text-2xl font-bold mb-15 text-text justify-center flex animate-fade-in">
                    Ce que j'écoute en ce moment
                </h2>
                <div className="bg-text/20 rounded-3xl p-10 shadow-2xl shadow-footer-background mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                    <iframe data-testid="embed-iframe" style={{ borderRadius: "12px"}} src="https://open.spotify.com/embed/album/2noZLRranx54rRKXSvrpim?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe data-testid="embed-iframe" style={{ borderRadius: "12px"}} src="https://open.spotify.com/embed/album/6oHbMbJOCGKvd0iQO0KxDK?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe data-testid="embed-iframe" style={{ borderRadius: "12px"}} src="https://open.spotify.com/embed/album/3L3UjpXtom6T0Plt1j6l1T?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe data-testid="embed-iframe" style={{ borderRadius: "12px"}} src="https://open.spotify.com/embed/album/5RyDQJIkTOl0QMeFZz8UGe?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </article>
    );
};