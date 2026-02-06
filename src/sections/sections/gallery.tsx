export const Gallery = () => {
    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
        <section className="items-center overflow-hidden py-20">
            <div className="relative flex items-center mt-25 mx-5">
                <h1 className="">Gallery Page</h1>
            </div>
        </section>
    </article>
    )
};