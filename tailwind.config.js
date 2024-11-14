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
            boxShadow: {
                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
            screens: {
                "3xl": "1921px",
            },
            gridTemplateColumns: {
                15: "repeat(15, minmax(0, 1fr))",
            },
            gridColumn: {
                "span-15": "span 15 / span 15",
            },
            aspectRatio: {
                "3/4": "3 / 4",
            },
        },
    },
    // important: true,
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-stroke-1": {
                    "-webkit-text-stroke": "1px #fff",
                },
                ".text-stroke-2": {
                    "-webkit-text-stroke": "2px #fff",
                },
            };

            addUtilities(newUtilities);
        },
    ],
};
