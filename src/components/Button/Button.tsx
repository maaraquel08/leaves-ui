import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    tone?: "brand" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button = ({
    children,
    variant = "primary",
    tone = "brand",
    size = "medium",
    disabled = false,
    className = "",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "min-w-[36px] rounded-lg font-medium transition-colors enabled:focus-visible:outline-none enabled:focus-visible:ring-2 enabled:focus-visible:ring-offset-2";

    const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: {
            brand: disabled
                ? "bg-primary text-white"
                : "bg-primary text-white hover:bg-primary-hover active:bg-primary-pressed",
            danger: disabled
                ? "bg-danger text-white"
                : "bg-danger text-white hover:bg-danger-hover active:bg-danger-pressed",
        },
        outline: {
            brand: disabled
                ? "border border-gray-300 text-primary"
                : "border border-gray-300 text-primary hover:bg-hover active:bg-pressed",
            danger: disabled
                ? "border border-danger text-danger"
                : "border border-danger text-danger hover:bg-hover active:bg-pressed",
        },
    };

    const sizes = {
        small: "text-sm leading-none px-2 py-1.5",
        medium: "text-base leading-none px-2.5 py-2",
        large: "text-base leading-none px-3 py-2.5",
    };

    const classes = [
        baseStyles,
        variants[variant][tone],
        sizes[size],
        disabledStyles,
        className,
    ].join(" ");

    return (
        <button
            className={classes}
            disabled={disabled}
            aria-disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
