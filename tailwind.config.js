/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			screens: {
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1450px",
			},
		},
		extend: {
			boxShadow: {
				light: "3px 3px 6px 0 hsl(0deg 0% 0% / 8%)",
			},
			colors: {
				primary: {
					header: "hsl(214, 22%, 15%)",
					footer: "hsl(210, 24%, 93%)",
					"main-headdings": "hsl(214, 22%, 20%)",
					headdings: "hsl(214, 22%, 35%)",
					text: "hsl(214, 22%, 50%)",
				},
			},
			container: {
				center: true,
				padding: "1.5rem",
			},
			gridTemplateColumns: {
				repeat: "repeat(auto-fit, minmax(240px, 1fr))",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				lobster: ["Lobster", "cursive"],
			},
			keyframes: {
				quee1: {
					"0%": {
						transform: "translateX(0%)",
					},
					"100%": { transform: "translateX(-100%)" },
				},
				leftTranslation: {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(0%)",
					},
				},
				rightTranslation: {
					"0%": {
						transform: "translateX(-100%)",
					},
					"100%": {
						transform: "translateX(0%)",
					},
				},
			},
			animation: {
				"Infinity-scroll": "quee1 10s linear infinite",
				"left-translation": "leftTranslation 100ms linear 1",
				"right-translation": "rightTranslation 100ms linear 1",
			},
		},
	},
	plugins: [],
};
