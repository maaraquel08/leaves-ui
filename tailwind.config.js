/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#353B37", // normal state
                    hover: "#3B453E", // hover state
                    pressed: "#2B2C2B", // pressed/active state
                },
                danger: {
                    DEFAULT: "#C33822", // normal state
                    hover: "#AF3523", // hover state
                    pressed: "#9D392A", // pressed/active state
                },
                hover: {
                    DEFAULT: "#f1f1f1",
                },
                pressed: {
                    DEFAULT: "#e1e1e1",
                },
            },
        },
    },
    plugins: [],
};
