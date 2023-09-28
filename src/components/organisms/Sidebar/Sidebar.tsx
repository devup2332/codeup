import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-router-dom";
import { openSidebarAction } from "../../../redux/actions/components/openSidebarActions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { CustomButton, SwitchTheme } from "../../atoms";
import { useTranslation } from "react-i18next";
import { Avatar, Typography } from "@mui/material";
import { setUser } from "../../../redux/reducers/userAuth/userAuth.reducer";

const HomeSidebar = () => {
	const { t } = useTranslation("index");
	const { openSidebar } = useAppSelector((state) => state.components);
	const { profile } = useAppSelector((state) => state.userAuth);
	const dispatch = useAppDispatch();
	const handleCloseDrawer = () => {
		dispatch(openSidebarAction(false));
	};
	const handleOpenDrawer = () => {
		dispatch(openSidebarAction(true));
	};

	const signOut = () => {
		localStorage.removeItem("codeup-token-user");
		dispatch(setUser({ profile: null }));
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
				{profile && (
					<li className="list-none">
						<Link
							className="px-2 py-3 block text-center"
							to="/"
							onClick={signOut}
						>
							<Typography color="error" fontWeight="600">Sign Out</Typography>
						</Link>
					</li>
				)}
				<li className="list-none flex items-center justify-center gap-10 py-3">
					{profile ? (
						<>
							<Avatar alt="Photo Profile" src={profile.picture} />
							<Link to="/new-post">
								<CustomButton className="w-28" variant="contained">
									<Typography className="py-1 text-white" fontWeight={700}>
										{t("homepage.sidebar.buttons.newPost")}
									</Typography>
								</CustomButton>
							</Link>
						</>
					) : (
						<>
							<div className="flex justify-between gap-5 items-center">
								<Link to="/login">
									<CustomButton className="w-28" variant="contained">
										<Typography className="py-1 text-white" fontWeight={700}>
											{t("homepage.sidebar.buttons.signIn")}
										</Typography>
									</CustomButton>
								</Link>
								|
								<Link to="/register" className="font-bold">
									{t("homepage.sidebar.buttons.signUp")}
								</Link>
							</div>
							<SwitchTheme />
						</>
					)}
				</li>
			</Box>
		</SwipeableDrawer>
	);
};

export default HomeSidebar;
