import { Button, styled, Typography } from "@mui/material";
import React from "react";

interface CustomButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const StyledButton = styled(Button)({
  padding: ".6rem 0",
});

const CustomButton = (props: CustomButtonProps) => {
  const { children, type, className } = props;
  return (
    <StyledButton variant="contained" type={type} className={className}>
      <Typography className="text-white" fontWeight="600">
        {children}
      </Typography>
    </StyledButton>
  );
};

export default CustomButton;