import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader, HomeSidebar } from "../../components/organisms";
import AuthApi from "../../lib/utils/api/api";
import { fetchAuthUser } from "../../redux/actions/userAuth/fetchUserAuth";
import { useAppDispatch } from "../../redux/store";

interface HomeTemplateProps {
	children: JSX.Element;
}

const HomepageTemplate = ({ children }: HomeTemplateProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const validateToken = async () => {
		const token = localStorage.getItem("codeup-token-user");
		if (token) {
			const { status, userId } = await AuthApi.validateToken(
				"/auth/validateToken",
				{ token },
			);
			if (status && userId) {
				dispatch(fetchAuthUser(userId));
				navigate("/");
			}
		}
	};

	useEffect(() => {
		validateToken();
	}, []);

	return (
		<div className="font-Montserrat relative">
			<HomeHeader />
			{children}
			<HomeSidebar />
		</div>
	);
};

export default HomepageTemplate;
