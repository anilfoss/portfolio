/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Righteous", "sans-serif"],
                body: ["Antonio", "sans-serif"],
            },
            colors: {
                stone: {
                    50: "#f7f6f5",
                    100: "#ebeae9",
                    200: "#d6d5d2",
                    300: "#bdbab4",
                    400: "#aba7a1",
                    500: "#8e8881",
                    600: "#817b75",
                    700: "#6c6662",
                    800: "#5a5552",
                    900: "#4a4644",
                    950: "#272523",
                    DEFAULT: "#aba7a1",
                },
            },
            listStyleType: {
                square: "square",
            },
            zIndex: {
                1: "1",
                "-1": "-1",
            },
            borderRadius: {
                "5xl": "3rem",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-stroke": {
                    "-webkit-text-stroke": "2px #fff",
                },
            };

            addUtilities(newUtilities);
        },
    ],
};