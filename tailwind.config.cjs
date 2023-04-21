/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#23C0C0",
			},
			fontFamily: {
				Montserrat: ["Montserrat"],
			},
			screens: {
				"3xl": "2400px",
			},
		},
	},
	plugins: [],
};
