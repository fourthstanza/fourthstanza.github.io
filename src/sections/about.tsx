export const About = () => {
    return (
    <section className="relative flex items-center my-25 bg-polaroid-blue mx-5 rounded-3xl">
        {/*Content?*/}
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 py-5 items-center">
                {/*image*/}
                <div>
                    <img src="./about_image.jpg" alt="About Image" className="w-full h-auto shadow-lg" />
                </div>
                {/*text*/}
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-text">Welcome to my page!</h2>
                    <p className="mb-4 md:text-xl font-medium text-text">
                        Hello! I'm Matthew Sylvester, a passionate researcher/software engineer with a background in astrophysics and computer science. I specialize in modelling dynamical systems and the practical application of artificial intelligence.
                        I'm a strong advocate for doing things yourself and continuously learning new skills.
                    </p>
                    <p className="mb-4 md:text-xl font-medium text-text">
                        When I'm not immersed in research, I enjoy exploring photography and tinkering with electronics as creative outlets.
                        You'll find here a showcase of my projects, research, and a bit about my journey in these exciting fields, as well as a gallery of images related to my work and artistic interests.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};