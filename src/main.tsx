import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import engLng from "./translates/en/index.json";
import { router } from "./router";
import { ThemeProvider } from "@mui/material";
import { MaterialTheme } from "./theme";

i18n.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      index: engLng,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={MaterialTheme}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
