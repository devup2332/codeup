import { Navigate } from "react-router-dom";

interface IPrivateRoutesProps {
	children: JSX.Element;
}

const PrivateRoutes = ({ children }: IPrivateRoutesProps) => {
	const token = localStorage.getItem("codeup-token-user");

	if (token) {
		return children;
	}
	return <Navigate to="/login" />;
};

export default PrivateRoutes;
