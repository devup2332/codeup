import { Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import WaveHome from "../../assets/wave-home.png";
import { CustomButton, HomeCard } from "../../components/atoms";
import { cards } from "../../data";
import { IconHomePage } from "../../components/atoms/Icons";

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
	const { t } = useTranslation("index");
	const xlMatches = useMediaQuery("(min-width: 1280px)");

	const handleTabsChange = (e: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<div>
			<img
				src={WaveHome}
				className="hidden absolute top-0 left-0 w-full lg:h-64 -z-10 xl:object-fit lg:block max-h-56"
				alt=""
			/>
			<div className="max-w-md m-auto lg:flex lg:max-w-4xl gap-28 items-center justify-between lg:mt-20 xl:max-w-6xl 2xl:max-w-7xl">
				<div className="py-10 grid gap-5 h-fit lg:w-5/12 xl:w-4/12 xl:gap-7">
					<Typography
						className="text-center lg:text-left"
						fontWeight={800}
						fontSize={xlMatches ? 54 : 32}
					>
						{t("homepage.banner.title")}
					</Typography>
					<Typography className="text-center lg:text-left">
						{t("homepage.banner.body")}
					</Typography>
					<CustomButton
						className="w-48 justify-self-center lg:justify-self-start"
						variant="contained"
					>
						<Typography className="py-1 text-white" fontWeight={700}>
							{" "}
							{t("homepage.banner.button")}
						</Typography>
					</CustomButton>
				</div>
				<IconHomePage className="hidden lg:block w-96 xl:w-6/12" />
			</div>
			<div className="grid gap-5 max-w-md md:max-w-4xl m-auto xl:max-w-6xl xl:gap-10">
				<Typography
					className="text-primary text-center xl:text-left"
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
					className="md:m-auto xl:m-0"
				>
					<Tab value={0} label="Web Development" />
					<Tab value={1} label="Mobile Development" />
					<Tab value={2} label="Scripting" />
					<Tab value={3} label="Design" />
					<Tab value={4} label="Python" />
				</Tabs>
				<SwipeableViews index={value}>
					<TabPanel
						className="gap-10 grid max-w-2xl lg:max-w-4xl m-auto md:grid-cols-2 xl:grid-cols-3 xl:max-w-none"
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
