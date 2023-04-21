import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	styled,
} from "@mui/material";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Option } from "../../../lib/utils/countryCodes";

type onChangeMethod = (code: string) => void;

interface CustomSelectProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
	options: Option[];
	validations: RegisterOptions<FieldValues, string> | undefined;
	register: UseFormRegister<FieldValues>;
	field: string;
	handleChange: onChangeMethod;
	value: string;
}

const StyledSelect = styled(Select)({
	"& fieldset": {
		borderColor: "black",
	},
});

const CustomSelect = (props: CustomSelectProps) => {
	const { label, options, validations, field, register, handleChange, value } =
		props;
	return (
		<FormControl>
			<InputLabel>{label}</InputLabel>
			<StyledSelect
				label={label}
				{...register(field, validations)}
				value={value}
				onChange={(e) => handleChange(e.target.value as string)}
			>
				{options.map(({ value, label }, index) => (
					<MenuItem value={value} key={index}>
						{label}
					</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};

export default CustomSelect;
