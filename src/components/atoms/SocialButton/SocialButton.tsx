import { Button, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SocialButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const CustomButton = styled(Button)({
  backgroundColor: `rgba(28,182,171, 0.1)`,
  border: `2px solid rgba(28,182,171, 0.4)`,
  display: "flex",
  gap: "1rem",
  padding: ".6rem 0px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(28,182,171,0.4)",
  },
});

const SocialButton = (props: SocialButtonProps) => {
  const { type, children } = props;
  return (
    <CustomButton variant="contained" type={type}>
      {children}
    </CustomButton>
  );
};

export default SocialButton;
