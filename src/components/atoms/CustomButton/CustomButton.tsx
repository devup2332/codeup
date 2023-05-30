import { Button, CircularProgress, styled } from "@mui/material";
import React from "react";

interface CustomButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode;
	loading?: boolean;
	variant: "text" | "outlined" | "contained" | undefined;
	style?: React.CSSProperties;
}

const StyledButton = styled(Button)({
	borderRadius: "10px",
	boxShadow: "none",
});

const CustomButton = (props: CustomButtonProps) => {
	const { children, type, className, loading, variant, style, onClick } = props;
	return (
		<StyledButton
			variant={variant}
			type={type}
			className={className}
			style={style}
			onClick={onClick}
		>
			{loading && (
				<CircularProgress size="25px" color="inherit" className="text-white" />
			)}
			{children}
		</StyledButton>
	);
};

export default CustomButton;
