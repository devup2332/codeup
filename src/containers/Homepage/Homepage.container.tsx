import { Typography } from "@mui/material";
import HomePageImage from "../../assets/homepage.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

const HomeContainer = () => {
	const { t } = useTranslation("index");
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
			<Typography>{t("homepage.topics.title")}</Typography>
		</div>
	);
};

export default HomeContainer;
