import { Alert, Snackbar } from "@mui/material";
import { setSnackbar } from "../../redux/actions/components/openSidebarActions";
import { useAppDispatch, useAppSelector } from "../../redux/store";

interface LoginTemplateProps {
	children: JSX.Element;
}
const AuthTemplate = ({ children }: LoginTemplateProps) => {
	const components = useAppSelector((state) => state.components);
	const dispatch = useAppDispatch();
	const { snackBar } = components;
	const onClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		dispatch(setSnackbar({ message: "", open: false, type: snackBar.type }));
	};
	return (
		<div className="font-Montserrat">
			{children}
			<Snackbar
				open={snackBar.open}
				autoHideDuration={3000}
				onClose={onClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={onClose}
					severity={snackBar.type}
					sx={{ width: "100%" }}
				>
					{snackBar.message}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default AuthTemplate;
