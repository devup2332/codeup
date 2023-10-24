import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTranslation } from "react-i18next";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
	Avatar,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { openSidebarAction } from "../../../redux/actions/components/openSidebarActions";
import { Link } from "react-router-dom";
import { CustomButton } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../../../redux/reducers/userAuth/userAuth.reducer";
import { IconProfile } from "../../atoms/Icons";

const HomeHeader = () => {
	const lgMatches = useMediaQuery("(min-width:1024px)");
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	const open = Boolean(anchor);
	const navigate = useNavigate();
	const { profile } = useAppSelector((state) => state.userAuth);
	const { t } = useTranslation("index");
	const dispatch = useAppDispatch();

	const signOut = () => {
		localStorage.removeItem("codeup-token-user");
		dispatch(setUser({ profile: null }));
	};

	const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchor(e.currentTarget);
	};

	const goToPage = (page: string) => navigate(page);

	const closeMenu = () => {
		setAnchor(null);
	};
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
					{profile ? (
						<>
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
									{t("homepage.sidebar.buttons.newPost")}
								</Typography>
							</CustomButton>
							<IconButton onClick={openMenu} id="basic-button">
								<Avatar alt="User Photo Profile" src={profile.picture} />
							</IconButton>
							<Menu
								open={open}
								id="basic-menu"
								anchorEl={anchor}
								onClose={closeMenu}
							>
								<MenuItem onClick={() => goToPage("/profile")}>
									<ListItemIcon>
										<IconProfile className="w-6 h-6" />
									</ListItemIcon>
									<ListItemText>
										<Typography>Profile</Typography>
									</ListItemText>
								</MenuItem>
								<MenuItem onClick={signOut}>
									<ListItemIcon>
										<ExitToAppIcon color="error" />
									</ListItemIcon>
									<ListItemText>
										<Typography color="error">Salir</Typography>
									</ListItemText>
								</MenuItem>
							</Menu>
						</>
					) : (
						<>
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
									{t("homepage.sidebar.buttons.signIn")}
								</Typography>
							</CustomButton>
							<CustomButton
								variant="text"
								onClick={() => navigate("/register")}
								style={{
									color: "black",
								}}
							>
								<Typography fontWeight={700}>
									{t("homepage.sidebar.buttons.signUp")}
								</Typography>
							</CustomButton>
						</>
					)}
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
