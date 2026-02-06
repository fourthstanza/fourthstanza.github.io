import { useParams } from "react-router";

export const NotFound = () => {
    const lang = useParams().lang;
    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
        <section className="items-center overflow-hidden">
            <div className="mx-5 w-full min-h-screen grid grid-cols-1">
                <h1 className="flex self-end justify-center w-full text-4xl">404</h1>
                <p className="flex justify-center w-full">{lang === "fr" ? "page non trouvée." : "page not found."}</p>
            </div>
        </section>
    </article>
    )
};