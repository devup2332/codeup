import { Navigate } from "react-router-dom";

interface IPublicRoutesProps {
	children: JSX.Element;
}

const PublicRoutes = ({ children }: IPublicRoutesProps) => {
	const token = localStorage.getItem("codeup-token-user");

	if (!token) {
		return children;
	}
	return <Navigate to="/" />;
};

export default PublicRoutes;
