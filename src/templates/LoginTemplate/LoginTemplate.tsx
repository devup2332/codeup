interface LoginTemplateProps {
  children: JSX.Element;
}
const LoginTemplate = ({ children }: LoginTemplateProps) => {
  return <div className="font-Montserrat">{children}</div>;
};

export default LoginTemplate;
