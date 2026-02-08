import { X } from "lucide-react"

type highlightProps = {
    src : string
    onClose : () => void
}

export const ImageHighlight = ({src, onClose} : highlightProps) => {
    return (
        <div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onClick ={onClose}
        >
            <div 
                className="max-h-screen max-w-screen relative"
                onClick = {(e) => e.stopPropagation()}
            >
                <img 
                    src = {src}
                    alt = ""
                    className="max-h-screen max-w-screen object-contain"
                />
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 z-40 text-white bg-black/60 rounded-full p-1 hover:bg-black/80 m-5"
                >
                    <X />
                </button>
            </div>
        </div>
    );
}