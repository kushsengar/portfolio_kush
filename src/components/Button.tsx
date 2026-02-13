import Link from "next/link";

interface ButtonProps {
    href?: string;
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
    onClick?: () => void;
}

export function Button({
    href,
    variant = "primary",
    children,
    className = "",
    type = "button",
    onClick,
}: ButtonProps) {
    const base =
        "relative inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium rounded-xl transition-all duration-300 active:scale-[0.97]";

    const variants = {
        primary:
            "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] overflow-hidden group",
        secondary:
            "bg-white/[0.03] border border-white/[0.08] text-text-primary hover:border-accent/40 hover:text-accent hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5",
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    const content = (
        <>
            {variant === "primary" && (
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            )}
            <span className="relative">{children}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {content}
        </button>
    );
}
