import LoginContainer from "../containers/Login/Login.container";
import AuthTemplate from "../templates/AuthTemplate/AuthTemplate";

const LoginPage = () => {
	return (
		<AuthTemplate>
			<LoginContainer />
		</AuthTemplate>
	);
};
export default LoginPage;
