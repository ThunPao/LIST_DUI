/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.svelte"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            {
                day: {
                    "primary": "#ff00d1",
                    "secondary": "#e90000",
                    "accent": "#0047ff",
                    "neutral": "#070707",
                    "base-100": "#e4fffe",
                    "info": "#00b7f0",
                    "success": "#6b8c00",
                    "warning": "#e26700",
                    "error": "#ff1164",
                },
                dawn: {
                    "primary": "#003dff",
                    "secondary": "#0060ff",
                    "accent": "#00d8ff",
                    "neutral": "#0f0002",
                    "base-100": "#22243a",
                    "info": "#22ddff",
                    "success": "#00ff7c",
                    "warning": "#c34800",
                    "error": "#f00d53",
                },
            },
        ],
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },

};
