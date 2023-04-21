import { environments } from "../../../environemts";
import { BodyFetch } from "../../../interfaces/BodyFetch";

export const instance = async (
	path: string,
	method: "POST" | "DELETE" | "PUT" | "GET",
	body?: BodyFetch
) => {
	const url = `${environments.API_URL}${path}`;
	const response = await fetch(url, {
		body: method !== "GET" ? JSON.stringify(body) : undefined,
		method,
		headers: {
			"Content-Type": "application/json",
		},
	});

	return await response.json();
};
