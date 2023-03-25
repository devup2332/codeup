import { Button, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SocialButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: (props: any) => JSX.Element;
  socialLabel: string;
}

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: `rgba(28,182,171, 0.1)`,
  border: `2px solid rgba(28,182,171, 0.4)`,
  display: "flex",
  gap: "1rem",
  padding: ".6rem 0px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(28,182,171,0.4)",
  },
}));

const SocialButton = (props: SocialButtonProps) => {
  const { Icon, socialLabel } = props;
  const { t } = useTranslation("index");
  return (
    <CustomButton variant="contained">
      <Icon className="h-7 w-7" />
      {t("login.socialButton.text")}
      {t(`login.socialButton.${socialLabel}.brand`)}{" "}
    </CustomButton>
  );
};

export default SocialButton;
