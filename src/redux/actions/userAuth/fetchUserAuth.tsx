import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "../../../lib/utils/api/api";

export const fetchAuthUser = createAsyncThunk(
	"userAuth/fetchAuthUser",
	async (userId: string) => {
		const response = await AuthApi.getUser(`/user/${userId}`);
		return response;
	},
);
