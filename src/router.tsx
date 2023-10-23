import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./guards/publicRoutes";
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
		element: (
			<PublicRoutes>
				<LoginPage />
			</PublicRoutes>
		),
	},
	{
		path: "/register",
		element: (
			<PublicRoutes>
				<RegisterPage />
			</PublicRoutes>
		),
	},
	{
		path: "/sso/auth",
		element: <SSOAuth />,
	},
]);
