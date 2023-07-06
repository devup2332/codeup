import { createTheme } from "@mui/material";

export const MaterialTheme = createTheme({
	palette: {
		primary: {
			main: "#0066FF",
		},
		secondary: {
			main: "#ffffff",
		},
	},
	typography: {
		fontFamily: ["Montserrat"].join(","),
		button: {
			textTransform: "none",
		},
	},
});
