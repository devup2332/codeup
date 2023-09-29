import { createSlice } from "@reduxjs/toolkit";
import { IComponentsState } from "../../../interfaces/ComponentsState";
import { RootState, store } from "../../store";

const initialState: IComponentsState = {
	openSidebar: false,
	snackBar: {
		message: "",
		open: false,
	},
};

export const slice = createSlice({
	name: "components",
	initialState,
	reducers: {
		openSidebarAction: (state, action) => {
			return { ...state, openSidebar: action.payload };
		},
		setSnackbarAction: (state, action) => {
			return {
				...state,
				snackBar: action.payload,
			};
		},
	},
});

export const selectComponents = (state: RootState) => state.components;

export type componentsDispatch = typeof store.dispatch;

export default slice.reducer;
