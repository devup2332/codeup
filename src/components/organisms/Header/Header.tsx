import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";

interface HomeHeaderProps {
	openSidebar: boolean;
	setOpenSidebar: (state: boolean) => void;
}

const HomeHeader = (props: HomeHeaderProps) => {
	const { t } = useTranslation("index");
	const { setOpenSidebar } = props;
	return (
		<header className="flex justify-between items-center py-2 px-3 gap-2">
			<InventoryIcon />

			<div className="border border-black border-solid rounded-md px-3 py-1 flex justify-between items-center">
				<input
					type="text"
					className="outline-none"
					placeholder={t("homepage.header.searchbox.text") || "Seacrh"}
				/>
				<SearchIcon />
			</div>
			<IconButton
				onClick={() => {
					setOpenSidebar(true);
				}}
			>
				<MenuIcon />
			</IconButton>
		</header>
	);
};

export default HomeHeader;
