import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../../redux/store";
import { openSidebarAction } from "../../../redux/actions/components/openSidebarActions";

const HomeHeader = () => {
	const { t } = useTranslation("index");
	const dispatch = useAppDispatch();
	return (
		<header className="flex justify-between items-center py-2 px-3 gap-4">
			<div className="p-2">
				<InventoryIcon />
			</div>

			<div className="border border-black border-solid rounded-md px-3 py-1 flex justify-between items-center">
				<input
					type="text"
					className="outline-none w-full"
					placeholder={t("homepage.header.searchbox.text") || "Seacrh"}
				/>
				<SearchIcon />
			</div>
			<IconButton
				onClick={() => {
					dispatch(openSidebarAction(true));
				}}
			>
				<MenuIcon />
			</IconButton>
		</header>
	);
};

export default HomeHeader;
