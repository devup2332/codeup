import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../lib/utils/api/instance";

export const fetchAuthUser = createAsyncThunk(
	"userAuth/fetchAuthUser",
	async (userId: string) => {
		const response = await instance(
			`/user/${userId}`,
			"GET",
		);
		return response;
	},
);
