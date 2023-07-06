import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTranslation } from "react-i18next";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "../../../redux/store";
import { openSidebarAction } from "../../../redux/actions/components/openSidebarActions";
import { Link } from "react-router-dom";
import { CustomButton } from "../../atoms";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
	const lgMatches = useMediaQuery("(min-width:1024px)");
	const navigate = useNavigate();
	const { t } = useTranslation("index");
	const dispatch = useAppDispatch();
	return (
		<header className="flex justify-between items-center py-2 px-3 gap-4 max-w-xl lg:max-w-4xl m-auto relative z-10 lg:py-5 xl:max-w-6xl 2xl:max-w-7xl">
			<div className="p-2 lg:hidden">
				<InventoryIcon />
			</div>
			<div className="flex gap-5 items-center xl:gap-10 w-7/12 justify-between">
				<Typography
					className="hidden lg:block text-white"
					fontWeight={800}
					fontSize={24}
					color="primary"
				>
					{t("homepage.header.brand.text")}
				</Typography>
				<ul className="hidden lg:flex text-black gap-5 lg:text-sm xl:gap-10">
					<li className="font-bold">
						<Link to="/">{t("homepage.sidebar.options.home")}</Link>
					</li>
					<li>
						<Link to="/topics">{t("homepage.sidebar.options.topics")}</Link>
					</li>
					<li>
						<Link to="/users">{t("homepage.sidebar.options.users")}</Link>
					</li>
					<li>
						<Link to="/search">{t("homepage.sidebar.options.search")}</Link>
					</li>
				</ul>
			</div>
			{lgMatches ? (
				<div className="flex gap-5 items-center xl:gap-10">
					<CustomButton
						variant="contained"
						color="primary"
						onClick={() => navigate("/login")}
						style={{
							background: "white",
							boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
						}}
					>
						<Typography
							color="primary"
							className="py-1 px-2"
							fontWeight={700}
							fontSize={14}
						>
							Sign In
						</Typography>
					</CustomButton>
					<CustomButton
						variant="text"
						onClick={() => navigate("/register")}
						style={{
							color: "black",
						}}
					>
						<Typography fontWeight={700}> Sign Up</Typography>
					</CustomButton>
				</div>
			) : (
				<IconButton
					onClick={() => {
						dispatch(openSidebarAction(true));
					}}
				>
					<MenuIcon />
				</IconButton>
			)}
		</header>
	);
};

export default HomeHeader;
