import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputCodeUpProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  Icon: (props: any) => JSX.Element;
  field: string;
  register: UseFormRegister<FieldValues>;
  validations: RegisterOptions<FieldValues, string> | undefined;
}

const InputCodeUp = ({
  label,
  type,
  Icon,
  onClick,
  register,
  field,
  validations,
}: InputCodeUpProps) => {
  return (
    <div className="border-black border-2 border-solid rounded-md flex justify-between py-2 px-3 ">
      <input
        type={type}
        placeholder={label}
        className="placeholder-black outline-none"
        {...register(field, validations)}
      />
      <div onClick={onClick} className="cursor-pointer">
        <Icon className="fill-current text-black w-7 h-7" />
      </div>
    </div>
  );
};

export default InputCodeUp;
