import { createSlice } from "@reduxjs/toolkit";
import { RootState, store } from "../../store";

interface IComponentsState {
	openSidebar: boolean;
}

const initialState: IComponentsState = {
	openSidebar: false,
};

export const slice = createSlice({
	name: "components",
	initialState,
	reducers: {
		openSidebarAction: (state, action) => {
			return { ...state, openSidebar: action.payload };
		},
	},
});

export const selectComponents = (state: RootState) => state.components;

export type componentsDispatch = typeof store.dispatch;

export default slice.reducer;
