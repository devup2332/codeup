import { Button, styled } from "@mui/material";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const CustomButton = styled(Button)({
	background: "#ffffff",
	border: "1px solid rgba(0,0,0,0.2)",
	display: "flex",
	gap: "1rem",
	borderRadius: "10px",
	boxShadow: "none",
	height: "50px",
	"&:hover": {
		backgroundColor: "#ffffff",
	},
});

const SocialButton = (
	props: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
) => {
	const { type, children, onClick } = props;
	return (
		<CustomButton variant="contained" type={type} onClick={onClick}>
			{children}
		</CustomButton>
	);
};

export default SocialButton;
