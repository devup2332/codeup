import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthUser } from "../../actions/userAuth/fetchUserAuth";
import { RootState, store } from "../../store";

interface IUserAuthProfile {
	email: string;
	id: string;
	description: string;
	isActive: boolean;
	picture: string;
	createdAt: Date | string;
	updatedAt: Date | string;
	authType: "form" | "google" | "github";
	firstName: string;
	lastName: string;
}

interface IUserAuth {
	profile: IUserAuthProfile | null;
}

export const userAuthInitialState: IUserAuth = {
	profile: null,
};

export const slice = createSlice({
	name: "userAuth",
	initialState: userAuthInitialState,
	reducers: {
		setUser: (state, action) => {
			return { ...state, ...action.payload };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthUser.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
	},
});

export const selectAuthUser = (state: RootState) => state.userAuth;
export const { setUser } = slice.actions;

export type userDispatch = typeof store.dispatch;

export default slice.reducer;
