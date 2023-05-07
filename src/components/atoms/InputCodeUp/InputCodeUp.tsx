import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	styled,
} from "@mui/material";

interface InputCodeUpProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
	Icon?: (props: any) => JSX.Element;
	field: string;
	register: UseFormRegister<FieldValues>;
	validations: RegisterOptions<FieldValues, string> | undefined;
	handleChangeVisibilityPassword?: () => void;
}

const CustomInput = styled(OutlinedInput)({
	"& fieldset": {
		borderColor: "rgba(0,0,0,0.2)",
		borderRadius: "10px",
	},
});

const InputCodeUp = (props: InputCodeUpProps) => {
	const {
		label,
		type,
		Icon,
		register,
		field,
		validations,
		handleChangeVisibilityPassword,
		className,
	} = props;
	return (
		<FormControl className={className}>
			<InputLabel>{label}</InputLabel>
			<CustomInput
				label={label}
				type={type}
				autoComplete="off"
				endAdornment={
					Icon && (
						<InputAdornment position="end">
							<IconButton onClick={handleChangeVisibilityPassword}>
								<Icon />
							</IconButton>
						</InputAdornment>
					)
				}
				{...register(field, validations)}
			/>
		</FormControl>
	);
};

export default InputCodeUp;
