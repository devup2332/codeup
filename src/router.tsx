import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
const LoginPageLazy = React.lazy(() => import("./pages/login"));

export const router = createBrowserRouter([
  {
    path: "login",
    Component: LoginPage,
  },
]);
