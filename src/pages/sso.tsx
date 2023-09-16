import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAuthUser } from "../redux/actions/userAuth/fetchUserAuth";
import { useAppDispatch } from "../redux/store";
import AuthApi from "../lib/utils/api/api";

const SSOAuth = () => {
	const [params] = useSearchParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const validateToken = async () => {
		const token = params.get("token");
		if (token) {
			const { status, userId } = await AuthApi.validateToken(
				"/auth/validateToken",
				{ token },
			);
			if (status && userId) {
				dispatch(fetchAuthUser(userId));
				localStorage.setItem("codeup-token-user", token);
				navigate("/");
			}
		}
	};

	useEffect(() => {
		validateToken();
	}, []);

	return <div></div>;
};

export default SSOAuth;
