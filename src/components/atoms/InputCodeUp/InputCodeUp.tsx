import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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

const InputCodeUp = (props: InputCodeUpProps) => {
  const {
    label,
    type,
    Icon,
    register,
    field,
    validations,
    handleChangeVisibilityPassword,
  } = props;
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
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
