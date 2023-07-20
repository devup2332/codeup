import { Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CustomButton, HomeCard } from "../../components/atoms";
import { cards } from "../../data";
import { IconHomePage } from "../../components/atoms/Icons";
import { useNavigate } from "react-router-dom";

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
	className?: string;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, className } = props;

	return (
		<div hidden={value !== index} className={className}>
			{value === index && children}
		</div>
	);
};

const HomeContainer = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	const { t } = useTranslation("index");
	const xlMatches = useMediaQuery("(min-width: 1280px)");

	const handleTabsChange = (e: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<div>
			<div className="py-10 max-w-md max-w-11/12 m-auto lg:flex lg:max-w-4xl gap-28 items-center justify-between xl:max-w-6xl 2xl:max-w-7xl">
				<IconHomePage className="hidden lg:block w-96 xl:w-6/12" />
				<div className="py-10 grid gap-5 h-fit lg:w-6/12 xl:gap-7">
					<Typography
						className="text-center lg:text-left"
						fontWeight={800}
						fontSize={xlMatches ? 70 : 32}
					>
						{t("homepage.banner.title")}
					</Typography>
					<CustomButton
						className="w-40 justify-self-center hidden lg:justify-self-start"
						variant="contained"
						onClick={() => navigate("/register")}
					>
						<Typography
							className="py-1 text-white"
							fontWeight={700}
							fontSize={14}
						>
							{t("homepage.banner.button")}
						</Typography>
					</CustomButton>
				</div>
			</div>
			<div className="grid gap-5 max-w-md md:max-w-4xl m-auto xl:max-w-6xl 2xl:max-w-7xl xl:gap-10">
				<Typography
					className="text-center"
					fontSize={xlMatches ? 30 : 25}
					fontWeight="800"
				>
					{t("homepage.topics.title")}
				</Typography>
				<Tabs
					value={value}
					onChange={handleTabsChange}
					aria-label="Topics"
					scrollButtons="auto"
					variant="scrollable"
					allowScrollButtonsMobile
					className="m-auto"
				>
					<Tab value={0} label="Web Development" />
					<Tab value={1} label="Mobile Development" />
					<Tab value={2} label="Scripting" />
					<Tab value={3} label="Design" />
					<Tab value={4} label="Python" />
				</Tabs>
				<SwipeableViews index={value}>
					<TabPanel
						className="gap-10 grid w-11/12  lg:w-full lg:max-w-4xl m-auto md:grid-cols-2 xl:grid-cols-3 xl:max-w-none"
						value={value}
						index={0}
					>
						{cards.map((c, index) => (
							<HomeCard {...c} key={index} />
						))}
					</TabPanel>
					<TabPanel value={value} index={1}>
						Panel 1
					</TabPanel>
					<TabPanel value={value} index={2}>
						Panel 2
					</TabPanel>
					<TabPanel value={value} index={3}>
						Panel 3
					</TabPanel>
					<TabPanel value={value} index={4}>
						Panel 4
					</TabPanel>
				</SwipeableViews>
			</div>
		</div>
	);
};

export default HomeContainer;
