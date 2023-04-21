import { createTheme } from "@mui/material";

export const MaterialTheme = createTheme({
	palette: {
		primary: {
			main: "#23C0C0",
		},
	},
	typography: {
		fontFamily: ["Montserrat"].join(","),
		button: {
			textTransform: "none",
		},
	},
});
