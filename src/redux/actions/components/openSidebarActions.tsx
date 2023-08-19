import { createAction } from "@reduxjs/toolkit";

export const openSidebarAction = createAction(
	"components/openSidebarAction",
	(opensidebar: boolean) => {
		return {
			payload: opensidebar,
		};
	},
);
