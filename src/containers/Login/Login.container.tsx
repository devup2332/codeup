import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  CustomButton,
  InputCodeUp,
  SocialButton,
} from "../../components/atoms";
import { useForm } from "react-hook-form";
import {
  IconEmail,
  IconGithub,
  IconGoogle,
  IconNotShowPassword,
  IconShowPassword,
} from "../../components/atoms/Icons";
import { emailRex } from "../../lib/utils/reg";
import LoginImage from "../../assets/login.jpg";

const LoginContainer = () => {
  const { t } = useTranslation("index");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setshowPass] = useState(false);

  const loginUser = (data: any) => {
    console.log({ data });
  };
  return (
    <div className="xl:flex">
      <div className="flex justify-center items-center h-screen xl:w-4/12 3xl:w-3/12">
        <form
          className="grid gap-5 w-11/12 h-fit max-w-md xl:w-9/12"
          onSubmit={handleSubmit(loginUser)}
        >
          <h1 className="text-3xl text-center">
            <span>{t("login.title")}</span>
            <span className="font-bold text-primary">{t("login.brand")}</span>
          </h1>
          <p className="text-center">
            {t("login.registerText.text")}{" "}
            <Link to="/register" className="font-bold text-primary">
              {t("login.registerText.link")}
            </Link>
          </p>
          <SocialButton type="button">
            <IconGithub className="h-7 w-7" />
            {t("register.socialButtons.text")}
            {t(`register.socialButtons.github.brand`)}
          </SocialButton>
          <SocialButton type="button">
            <IconGoogle className="h-7 w-7" />
            {t("register.socialButtons.text")}
            {t(`register.socialButtons.github.brand`)}
          </SocialButton>
          <p className="text-center font-bold">Or</p>
          <div className="grid gap-3">
            <InputCodeUp
              register={register}
              label="Email"
              type="text"
              Icon={IconEmail}
              field="email"
              validations={{
                required: true,
                pattern: emailRex,
              }}
            />
            {errors.email && (
              <>
                {errors.email.type === "required" && (
                  <p className="text-red-400 font-bold">
                    {t("login.errors.email.required.text")}
                  </p>
                )}
                {errors.email.type === "pattern" && (
                  <p className="text-red-400 font-bold">
                    {t("login.errors.email.pattern.text")}
                  </p>
                )}
              </>
            )}
          </div>
          <div className="grid gap-3">
            <InputCodeUp
              label="Password"
              Icon={showPass ? IconNotShowPassword : IconShowPassword}
              type={showPass ? "text" : "password"}
              handleChangeVisibilityPassword={() => setshowPass(!showPass)}
              register={register}
              field="password"
              validations={{
                required: true,
              }}
            />
            <p className="text-red-400 font-bold">
              {errors.password?.type === "required" &&
                t("login.errors.password.required.text")}
            </p>
          </div>
          <Link
            to="/forgotpassword"
            className="text-primary font-semibold w-fit"
          >
            {t("login.forgotPassword.text")}
          </Link>
          <CustomButton type="submit">
            {t("login.button.submitText")}
          </CustomButton>
        </form>
      </div>
      <div className="hidden xl:block relative h-screen w-8/12 3xl:w-9/12">
        <div className="absolute w-full h-full bg-black bg-opacity-40" />
        <img src={LoginImage} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default LoginContainer;
