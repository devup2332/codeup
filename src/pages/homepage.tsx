import { SwipeableDrawer, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { CustomButton } from "../components/atoms";
import { HomeHeader } from "../components/organisms";
import HomePageImage from "../assets/homepage.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

const HomePage = () => {
	const [theme, setTheme] = useState(true);
	const [openSidebar, setOpenSidebar] = useState(false);
	const { t } = useTranslation("index");
	const handleCloseDrawer = () => {
		setOpenSidebar(false);
	};
	const handleOpenDrawer = () => {
		setOpenSidebar(true);
	};

	const handleChangeTheme = () => {
		setTheme(!theme);
	};
	return (
		<div>
			<HomeHeader openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			<div className="relative before:content-['] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-75">
				<img src={HomePageImage} alt="" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 grid gap-4">
					<Typography color="white" fontWeight="700">
						CodeUp
					</Typography>
					<Typography variant="body1" color="white">
						Finds a lot of articles about of code and development apps
					</Typography>
					<div className="border border-black border-solid rounded-md px-3 py-1 flex justify-between items-center bg-white">
						<input
							type="text"
							className="outline-none w-full"
							placeholder={t("homepage.header.searchbox.text") || "Seacrh"}
						/>
						<SearchIcon />
					</div>
				</div>
			</div>
			<SwipeableDrawer
				open={openSidebar}
				anchor="bottom"
				onClose={handleCloseDrawer}
				swipeAreaWidth={56}
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
									<Typography component="span">Sing In</Typography>
								</CustomButton>
							</Link>
							|<Link to="/register">Sign Up</Link>
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
		</div>
	);
};

export default HomePage;
