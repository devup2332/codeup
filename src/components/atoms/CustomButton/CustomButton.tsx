import React from "react";

interface CustomButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children } = props;
  return (
    <button
      className="bg-primary py-3 flex justify-center items-center rounded-md text-white font-semibold text-sm"
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
