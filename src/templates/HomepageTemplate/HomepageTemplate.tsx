import { HomeHeader, HomeSidebar } from "../../components/organisms";

interface HomeTemplateProps {
	children: JSX.Element;
}

const HomepageTemplate = ({ children }: HomeTemplateProps) => {
	return (
		<div className="font-Montserrat relative">
			<HomeHeader />
			{children}
			<HomeSidebar />
		</div>
	);
};

export default HomepageTemplate;
