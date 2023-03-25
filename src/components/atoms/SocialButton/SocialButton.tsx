import { useTranslation } from "react-i18next";

interface SocialButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: (props: any) => JSX.Element;
  socialLabel: string;
}

const SocialButton = (props: SocialButtonProps) => {
  const { Icon, socialLabel } = props;
  const { t } = useTranslation("index");
  return (
    <button
      className="border-primary rounded-md border-2 border-solid border-opacity-40 flex w-full bg-opacity-10 bg-primary justify-center gap-5 py-2"
      {...props}
    >
      <Icon className="h-7 w-7" />
      {t("login.socialButton.text")}
      {t(`login.socialButton.${socialLabel}.brand`)}{" "}
    </button>
  );
};

export default SocialButton;
