import { createAction } from "@reduxjs/toolkit";
import { ISnackbarState } from "../../../interfaces/ComponentsState";

export const openSidebarAction = createAction(
	"components/openSidebarAction",
	(opensidebar: boolean) => {
		return {
			payload: opensidebar,
		};
	},
);

export const setSnackbar = createAction(
	"components/setSnackbarAction",
	(snackbarStatus: ISnackbarState) => {
		return { payload: snackbarStatus };
	},
);
