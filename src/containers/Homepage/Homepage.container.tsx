import { Tab, Tabs, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import WaveHome from "../../assets/wave-home.png";
import { CustomButton, HomeCard } from "../../components/atoms";
import { cards } from "../../data";

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

	const handleTabsChange = (e: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<div>
			<img src={WaveHome} className="hidden fixed top-0 left-0 h-28" alt="" />
			<div className="py-10 grid gap-5">
				<Typography className="text-center" fontWeight={800} fontSize={32}>
					{t("homepage.banner.title")}
				</Typography>
				<Typography className="text-center">
					{t("homepage.banner.body")}
				</Typography>
				<CustomButton className="w-48 justify-self-center" variant="contained">
					{t("homepage.banner.button")}
				</CustomButton>
			</div>
			<div className="py-3 px-2 grid gap-5">
				<Typography
					className="text-primary text-center"
					variant="h5"
					fontWeight="600"
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
				>
					<Tab value={0} label="Web Development" />
					<Tab value={1} label="Mobile Development" />
					<Tab value={2} label="Scripting" />
					<Tab value={3} label="Design" />
					<Tab value={4} label="Python" />
				</Tabs>
				<SwipeableViews index={value}>
					<TabPanel
						className="gap-5 grid w-11/12 m-auto"
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
