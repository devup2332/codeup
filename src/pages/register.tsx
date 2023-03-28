import RegisterContainer from "../containers/Register/Register.container";
import AuthTemplate from "../templates/AuthTemplate/AuthTemplate";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterContainer />
    </AuthTemplate>
  );
};

export default RegisterPage;
