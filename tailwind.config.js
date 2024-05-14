/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                black: "#000",
                white: "#FFF",
                grey: {
                    light: "#CCC",
                    dark: "#666",
                },
                red: "#F33",
                CoreBrand: {
                    BrightBlue: "#0E0EA0",
                    LightBlue: "#679BFF",
                    SmartreNavy: "#000033",
                },
                Monotone: {
                    Smoke: "#EDEDED",
                    LightSmoke: "#F9F9F9",
                    SuperDarkSmoke: "#909090",
                    Charcoal: "#141414",
                },
                Ui: {
                    Red: "#D86060",
                    Green: "#74AD76",
                    Yellow: "#D5C750",
                },
            },
            borderRadius: {},
            gridTemplateColumns: {},
            fontSize: {},
        },
    },
    plugins: [],
};

module.exports = config;
