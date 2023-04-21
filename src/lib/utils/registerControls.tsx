import { FieldValues, RegisterOptions } from "react-hook-form";
import { instance } from "./api/instance";
import { emailRex } from "./reg";

interface Control {
	label: string;
	name: string;
	type: string;
	validations?: RegisterOptions<FieldValues, string> | undefined;
	className?: string;
}
export const registerControls: Control[] = [
	{
		label: "First Name",
		name: "firstName",
		type: "text",
		className: "grid gap-2 xl:col-start-1 xl:col-end-4",
		validations: {
			required: true,
		},
	},
	{
		label: "Last Name",
		name: "lastName",
		type: "text",
		className: "grid gap-2 xl:col-start-4 xl:col-end-7",
		validations: {
			required: true,
		},
	},
	{
		label: "Code",
		name: "code",
		type: "text",
		className: "grid gap-2 xl:col-start-1 xl:col-end-4",
		validations: {
			required: true,
		},
	},
	{
		label: "Phone",
		name: "phone",
		type: "number",
		className: "grid gap-2 xl:col-start-4 xl:col-end-7",
		validations: {
			required: true,
		},
	},

	{
		label: "Email",
		name: "email",
		type: "text",
		className: "grid gap-2 xl:col-start-1 xl:col-end-7",
		validations: {
			required: true,
			pattern: emailRex,
			validate: {
				emailIsUsed: async (val: string) => {
					const { status } = await instance(
						"/auth/validateEmail/" + val,
						"GET"
					);
					console.log({ status });
					if (status !== 0) return true;
					return false;
				},
			},
		},
	},
	{
		label: "Password",
		name: "password",
		type: "password",
		className: "grid gap-2 xl:col-start-1 xl:col-end-7",
		validations: {
			required: true,
		},
	},
	{
		label: "Repeat Password",
		name: "password2",
		type: "password",
		className: "grid gap-2 xl:col-start-1 xl:col-end-7",
	},
];
