import { VITE_API_URL } from "../../../environemts";
import { BodyFetch } from "../../../interfaces/BodyFetch";

export const apiInstance = {
	GET: async (path: string) => {
		const url = `${VITE_API_URL}${path}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	},
	POST: async (path: string, data: BodyFetch) => {
		const url = `${VITE_API_URL}${path}`;
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	},
	PUT: async (path: string, data: BodyFetch) => {
		const url = `${VITE_API_URL}${path}`;
		const response = await fetch(url, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	},
	DELETE: async (path: string, data?: BodyFetch) => {
		const url = `${VITE_API_URL}${path}`;
		const response = await fetch(url, {
			method: "DELETE",
			body: data ? JSON.stringify(data) : undefined,
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	},
};
