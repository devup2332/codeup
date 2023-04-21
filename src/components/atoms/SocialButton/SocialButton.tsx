import { Button, styled } from "@mui/material";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const CustomButton = styled(Button)({
	backgroundColor: "rgba(28,182,171, 0.1)",
	border: "2px solid rgba(28,182,171, 0.4)",
	display: "flex",
	gap: "1rem",
	padding: ".6rem 0px",
	boxShadow: "none",
	"&:hover": {
		backgroundColor: "rgba(28,182,171,0.4)",
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
