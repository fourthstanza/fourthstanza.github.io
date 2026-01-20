import aboutImage from "@/assets/images/about_image.jpg";

export const AboutFR = () => {
    return (
    <section className="min-h-screen items-center overflow-hidden py-20">
        {/*background*/}
        <img src="/glass_blur_grain.png" className="absolute w-full h-full inset-0 z-0 object-cover opacity-80"/>
        <div className="absolute inset-0 bg-linear-to-t from-background-bottom to-background-top/0"/>
        <div className="relative flex items-center my-25 mx-5 rounded-3xl">
            {/*Content?*/}
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 py-5 items-center">
                    {/*image*/}
                    <div>
                        <img src={aboutImage} alt="About Image" className="w-full h-auto shadow-2xl shadow-footer-background" />
                    </div>
                    {/*text*/}
                    <div className="md:px-4 py-10">
                        <h2 className="text-4xl font-bold mb-4 text-text">Welcome to my page.</h2>
                        <p className="mb-4 md:text-xl font-medium text-text">
                            Hello! My name's Matthew. I'm a passionate new research assistant/software engineer with a background in astrophysics and computer science. I specialize in modelling dynamical systems and the practical application of machine learning.
                            I'm a strong advocate for doing things yourself and continuously learning new skills.
                        </p>
                        <p className="mb-4 md:text-xl font-medium text-text">
                            When I'm not immersed in research, I enjoy exploring photography and tinkering with electronics as creative outlets.
                            You'll find here a showcase of my projects and research, as well as a gallery of images related to my work and artistic interests.
                        </p>
                        <p className="mt-7 md:text-xl italic font-medium text-text">
                            This webpage is a work in progress, expect some functionality to be missing.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 mt-20">
                    <h2 className="text-4xl font-bold mb-4 text-text justify-center flex">
                        What I've been up to
                    </h2>
                </div>
            </div>
        </div>
    </section>
    );
};