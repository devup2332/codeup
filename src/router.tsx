import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export const router = createBrowserRouter([
  {
    path: "",
    Component: HomePage,
  },
  {
    path: "login",
    Component: LoginPage,
  },
  {
    path: "register",
    Component: RegisterPage,
  },
]);
