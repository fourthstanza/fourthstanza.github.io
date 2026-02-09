import { Gal2Images } from "./gal2images"
import { useState } from "react"
import { ImageHighlight } from "../../components/imageHighlight";

const len = Gal2Images.length;

export const Gallery2 = () => {

    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
        <section className="items-center overflow-hidden py-30 flex justify-center">
            <section className="items-center overflow-hidden mx-20 lg:px-6">
                <div className="columns-1 lg:columns-2 xl:columns-3 justify-center gap-10 py-10 animate-fade-in-2 content-center">
                    {Array.from({length:len}).map((_, i) => (
                        <div className="py-5 max-w-xl">
                            <img src={Gal2Images[i]} onClick={() => setActiveImage(Gal2Images[i])} className="rounded-md cursor-pointer"></img>
                        </div>
                    ))}
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