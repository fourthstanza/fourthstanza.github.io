

export const Button = ({className = "", size = "default", children}: {className?: string; size?: "sm" | "default" | "lg"; children: React.ReactNode}) => {
    const baseClasses = "relative text-text overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 rounded-full bg-background-top hover:bg-background-top/90 shadow-md/20 shadow-background-top hover:text-hover";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
    <button className={classes}>
        <span className="relative flex items-center justify-center gap-2">
            {children}
            </span>
    </button>
    );
};