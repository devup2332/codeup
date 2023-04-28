import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import SSOAuth from "./pages/sso";

export const router = createBrowserRouter([
	{
		path: "",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/sso/auth?token=:token",
		element: <SSOAuth />,
	},
]);
