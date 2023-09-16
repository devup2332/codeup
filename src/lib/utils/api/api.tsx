import { BodyFetch } from "../../../interfaces/BodyFetch";
import { apiInstance } from "./instance";

const AuthApi = {
	loginUser: async (data: BodyFetch) => {
		return await apiInstance.POST("/auth/login", data);
	},
	registerUser: async (data: BodyFetch) => {
		return await apiInstance.POST("/auth/register", data);
	},
	getUser: async (path: string) => {
		return await apiInstance.GET(path);
	},
	validateEmail: async (path: string) => {
		return await apiInstance.GET(path);
	},
	validateToken: async (path: string, body: BodyFetch) => {
		return await apiInstance.POST(path, body);
	},
};

export default AuthApi;
