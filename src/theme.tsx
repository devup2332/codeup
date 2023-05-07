import { createTheme } from "@mui/material";

export const MaterialTheme = createTheme({
	palette: {
		primary: {
			main: "#26D481",
		},
	},
	typography: {
		fontFamily: ["Montserrat"].join(","),
		button: {
			textTransform: "none",
		},
	},
});
