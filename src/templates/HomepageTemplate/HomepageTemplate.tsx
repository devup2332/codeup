import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader, HomeSidebar } from "../../components/organisms";
import { fetchAuthUser } from "../../redux/actions/userAuth/fetchUserAuth";
import { useAppDispatch } from "../../redux/store";
import { verifyTokenMethod } from "../../utils/verifyToken";

interface HomeTemplateProps {
	children: JSX.Element;
}

const HomepageTemplate = ({ children }: HomeTemplateProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const initToken = async () => {
		const { pass, userId } = await verifyTokenMethod();
		if (pass && userId) {
			dispatch(fetchAuthUser(userId));
		} else {
			navigate("/");
		}
	};

	useEffect(() => {
		initToken();
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
