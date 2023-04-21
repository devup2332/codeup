import { Button, CircularProgress, styled, Typography } from "@mui/material";
import React from "react";

interface CustomButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode;
	loading?: boolean;
}

const StyledButton = styled(Button)({
	padding: ".6rem 0",
});

const CustomButton = (props: CustomButtonProps) => {
	const { children, type, className, loading } = props;
	return (
		<StyledButton variant="contained" type={type} className={className}>
			{loading && (
				<CircularProgress size="25px" color="inherit" className="text-white" />
			)}
			<Typography className="text-white" fontWeight="600">
				{children}
			</Typography>
		</StyledButton>
	);
};

export default CustomButton;
