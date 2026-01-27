import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../../components/button";
import {useState} from "react"
import emailjs from '@emailjs/browser'

const contactInfo = [
    {
        icon: Mail,
        label: "Courriel",
        value: "fourthstanza@gmail.com"
    },
    {
        icon: Phone,
        label: "Téléphone",
        value: "+1 (819) 993-8076",
        href: "tel:+18199938076"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Sherbrooke, QC, Canada"
    }
];

type submitStatusType = {
    type: "success" | "error" | null;
    message: string;
};

export const ContactFR = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<submitStatusType>({
        type: null,
        message: ""
    });

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type:null, message: ""});
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if(!serviceId || !templateId || !publicKey){
                throw new Error(
                    "EmailJS config is missing. Check environment variables."
                )
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicKey)

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon."
            })
        } catch (error) {
    if (error instanceof Error) {
        console.error("EmailJS error:", error.message);
        setSubmitStatus({
            type: "error",
            message: error.message || "Failed to send message. Please try again later.",
        });
    } else {
        console.error("Unknown error:", error);
        setSubmitStatus({
            type: "error",
            message: "Failed to send message. Please try again later.",
            })
    }
        } finally {
            setIsLoading(false)
        }
    };

    return (
    <article className="h-auto relative min-h-screen">
        {/*background image*/}
        <img src="/glass_blur_grain.png" className="min-h-screen absolute w-full inset-0 -z-10 object-cover opacity-80 mask-b-from-50% mask-b-to-100%"/>
        <form  onSubmit={handleSubmit} className="">
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <div className="m-30 mb-5 animate-fade-in">
                    <h1 className="text-center text-4xl font-bold text-text p-3">Connectons!</h1>
                    <p className="text-center text-lg font-medium text-text md:w-xl w-80">Vous êtes intéressé par mon travail et souhaitez me contacter? Utilisez le formulaire ci-dessous pour m'envoyer un message et je vous répondrai.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 mb-20">
                    <div className="glass p-4 rounded-4xl outline-text/40 outline-1 animate-fade-in-2 md:w-xl w-80 shadow-xl shadow-footer-background m-5">
                        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] py-3">
                            <label 
                                htmlFor="name" 
                                className="align-middle font-medium py-2">
                                    Nom
                            </label>
                            <input 
                                id="name" 
                                type="text"
                                required
                                placeholder="Votre nom complet"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value})
                                }
                                className="w-full px-4 py-2 mb-4 bg-background-middle/50 rounded-xl border border-text/20 focus:border-hover focus:outline-none"/>
                            <label 
                                htmlFor="email" 
                                className="align-middle font-medium py-2">
                                    Courriel
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Votre addresse@courriel.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value})
                                }
                                className="w-full px-4 py-2 mb-4 bg-background-middle/50 rounded-xl border border-text/20 focus:border-hover focus:outline-none"/>
                            <label 
                                htmlFor="message" 
                                className="align-middle font-medium py-2">
                                    Message
                            </label>
                            <textarea 
                                id="message"
                                required
                                rows={7}
                                placeholder="Votre message..."
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value})
                                }
                                className="w-full px-4 py-2 bg-background-middle/50 rounded-xl border border-text/20 focus:border-hover focus:outline-none"/>
                        </div>
                        <div className="py-3">
                            <Button 
                            className="w-full" 
                            type="submit" 
                            disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                    En cours...
                                    </>
                                ) : (
                                    <>
                                    Envoyez
                                    <Send className="w-5 h-5"/>
                                    </>
                                    )
                                }
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 mt-4 rounded-xl ${
                                        submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500 text-green-500"
                                            : "bg-red-500/10 border-red-500 text-red-500"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="glass p-4 rounded-4xl outline-text/40 outline-1 animate-fade-in-3 md:w-xl w-80 shadow-xl shadow-footer-background m-5 mb-20">
                            <h3 className="text-xl text-center font-semibold mb-6">
                                Coordonnées
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group-[]:"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-[]: bg-background-top/30">
                                            <item.icon className="w-5 h-5 text-hover" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-text">
                                                {item.label}
                                            </div>
                                            <div className="font-medium">{item.value}</div>
                                        </div>
                                    </a>
                                ))}

                            </div>
                    </div>
                </div>
            </div>
        </form>
    </article>
    )
};