import AuthApi from "../lib/utils/api/api";

export const verifyTokenMethod = async (token?: string) => {
	const key = token || localStorage.getItem("codeup-token-user");
	if (key) {
		const { status, expired, userId } = await AuthApi.validateToken(
			"/auth/validateToken",
			{ token: key }
		);
		if (status && expired) {
			const { newToken } = await AuthApi.refreshToken("/auth/refreshToken", {
				token: key,
			});
			localStorage.setItem("codeup-token-user", newToken);
			return { pass: true, userId };
		}
		if (status && userId) {
			return { pass: true, userId };
		}
		return { pass: false, userId: null };
	}
	return { pass: false, userId: null };
};
