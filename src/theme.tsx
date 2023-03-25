import { createTheme } from "@mui/material";

export const MaterialTheme = createTheme({
  palette: {
    primary: {
      main: "#1CB6AB",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    button: {
      textTransform: "none",
    },
  },
});
