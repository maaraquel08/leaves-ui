import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "outline";
    tone: "brand" | "danger";
    size: "small" | "medium" | "large";
    children: React.ReactNode;
}

export const Button = ({
    variant,
    tone,
    size,
    children,
    ...props
}: ButtonProps) => {
    const baseStyles =
        "min-w-[36px] rounded-lg font-medium transition-colors enabled:focus-visible:outline-none enabled:focus-visible:ring-2 enabled:focus-visible:ring-offset-2";

    const variants = {
        primary: {
            brand: "bg-primary text-white hover:bg-primary-hover active:bg-primary-pressed",
            danger: "bg-danger text-white hover:bg-danger-hover active:bg-danger-pressed",
        },
        outline: {
            brand: "border border-gray-300 text-primary hover:bg-hover active:bg-pressed",
            danger: "border border-danger text-danger hover:bg-hover active:bg-pressed",
        },
    };

    const sizes = {
        small: "text-sm leading-none px-2 py-1.5",
        medium: "text-base leading-none px-2.5 py-2",
        large: "text-base leading-none px-3 py-2.5",
    };

    const classes = [baseStyles, variants[variant][tone], sizes[size]].join(
        " "
    );

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
