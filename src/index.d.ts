import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "outline";
    tone: "brand" | "danger";
    size: "small" | "medium" | "large";
    disabled?: boolean;
    children: React.ReactNode;
}

export declare const Button: React.FC<ButtonProps>;
