import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SSOAuth = () => {
	const { token } = useParams();
	useEffect(() => {
		localStorage.setItem(
			"authtoken",
			token ? token.replace("-", ".").replace("-", ".") : ""
		);
	}, []);

	return <div>{token}</div>;
};

export default SSOAuth;
