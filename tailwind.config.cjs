/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#26D481",
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
