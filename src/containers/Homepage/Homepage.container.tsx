import { Box, Tab, Tabs, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import HomePageImage from "../../assets/homepage.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div hidden={value !== index} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
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
			<div className="relative before:content-['] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-75">
				<img src={HomePageImage} alt="" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 grid gap-4">
					<Typography color="white" fontWeight="700">
						{t("homepage.banner.title")}
					</Typography>
					<Typography variant="body1" color="white">
						{t("homepage.banner.body")}
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
			<div className="py-3 px-2">
				<Typography className="text-primary" variant="h5" fontWeight="600">
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
					<TabPanel value={value} index={0}>
						Panel 1
					</TabPanel>
					<TabPanel value={value} index={1}>
						Panel 2
					</TabPanel>
					<TabPanel value={value} index={2}>
						Panel 3
					</TabPanel>
					<TabPanel value={value} index={3}>
						Panel 4
					</TabPanel>
					<TabPanel value={value} index={4}>
						Panel 5
					</TabPanel>
				</SwipeableViews>
			</div>
		</div>
	);
};

export default HomeContainer;
