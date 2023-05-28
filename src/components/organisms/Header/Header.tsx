import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTranslation } from "react-i18next";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "../../../redux/store";
import { openSidebarAction } from "../../../redux/actions/components/openSidebarActions";
import { Link } from "react-router-dom";
import { CustomButton, SwitchTheme } from "../../atoms";

const HomeHeader = () => {
	const lgMatches = useMediaQuery("(min-width:1024px)");
	const { t } = useTranslation("index");
	const dispatch = useAppDispatch();
	return (
		<header className="flex justify-between items-center py-2 px-3 gap-4 max-w-xl lg:max-w-4xl m-auto relative z-10 lg:py-5 xl:max-w-6xl 2xl:max-w-7xl">
			<div className="p-2 lg:hidden">
				<InventoryIcon />
			</div>
			<div className="flex gap-5 items-center xl:gap-10 ">
				<Typography
					className="hidden lg:block text-white"
					fontWeight={800}
					fontSize={24}
				>
					{t("homepage.header.brand.text")}
				</Typography>

				<div className="border border-black border-solid rounded-md px-3 py-2 flex justify-between items-center lg:bg-white lg:border-none">
					<input
						type="text"
						className="outline-none w-full bg-transparent"
						placeholder={t("homepage.header.searchbox.text") || "Seacrh"}
					/>
					<SearchIcon />
				</div>
				<ul className="hidden lg:flex text-white gap-5 lg:text-sm xl:gap-10">
					<li className="font-bold">
						<Link to="/">{t("homepage.sidebar.options.home")}</Link>
					</li>
					<li>
						<Link to="/topics">{t("homepage.sidebar.options.topics")}</Link>
					</li>
					<li>
						<Link to="/users">{t("homepage.sidebar.options.users")}</Link>
					</li>
				</ul>
			</div>
			{lgMatches ? (
				<div className="flex gap-5 items-center xl:gap-10">
					<SwitchTheme />
					<CustomButton
						variant="contained"
						color="primary"
						style={{
							background: "white",
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
						style={{
							color: "white",
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
