interface LoginTemplateProps {
	children: JSX.Element;
}
const AuthTemplate = ({ children }: LoginTemplateProps) => {
	return <div className="font-Montserrat">{children}</div>;
};

export default AuthTemplate;
