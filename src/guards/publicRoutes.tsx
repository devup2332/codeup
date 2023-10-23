import { Navigate } from "react-router-dom";

interface IPublicRoutesProps {
	children: JSX.Element;
}

export const PublicRoutes = ({ children }: IPublicRoutesProps) => {
	const token = localStorage.getItem("codeup-token-user");

	if (!token) {
		return children;
	}
	return <Navigate to="/" />;
};
