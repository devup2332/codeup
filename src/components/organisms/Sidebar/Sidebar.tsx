import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-router-dom";
import { openSidebarAction } from "../../../redux/actions/components/openSidebarActions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useState } from "react";
import { CustomButton } from "../../atoms";
import { useTranslation } from "react-i18next";

const HomeSidebar = () => {
	const { t } = useTranslation("index");
	const { openSidebar } = useAppSelector((state) => state.components);
	const dispatch = useAppDispatch();
	const [theme, setTheme] = useState(true);
	const handleCloseDrawer = () => {
		dispatch(openSidebarAction(false));
	};
	const handleOpenDrawer = () => {
		dispatch(openSidebarAction(true));
	};

	const handleChangeTheme = () => {
		setTheme(!theme);
	};
	return (
		<SwipeableDrawer
			open={openSidebar}
			anchor="bottom"
			onClose={handleCloseDrawer}
			onOpen={handleOpenDrawer}
		>
			<Box>
				<li className="list-none">
					<Link className="px-2 py-3 block text-center" to="/">
						Home
					</Link>
				</li>
				<li className="list-none">
					<Link className="px-2 py-3 block text-center" to="/">
						Topics
					</Link>
				</li>
				<li className="list-none">
					<Link className="px-2 py-3 block text-center" to="/">
						Profile
					</Link>
				</li>
				<li className="list-none flex items-center justify-center gap-10 py-3">
					<div className="flex justify-between gap-5 items-center">
						<Link to="/login">
							<CustomButton className="w-28">
								{t("homepage.sidebar.buttons.signIn")}
							</CustomButton>
						</Link>
						|<Link to="/register">{t("homepage.sidebar.buttons.signUp")}</Link>
					</div>
					<button
						className="bg-gray-200 rounded-full w-14 h-7 relative "
						onClick={handleChangeTheme}
					>
						<div
							className="w-5 h-5 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition-all"
							style={{
								left: theme ? "5px" : "32px",
							}}
						></div>
					</button>
				</li>
			</Box>
		</SwipeableDrawer>
	);
};

export default HomeSidebar;
