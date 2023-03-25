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

const emailRex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

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
    <div className="flex justify-center items-center h-screen">
      <form
        className="grid gap-5 w-11/12 h-fit"
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

        <SocialButton Icon={IconGithub} type="button" socialLabel="github" />
        <SocialButton Icon={IconGoogle} type="button" socialLabel="google" />

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
            onClick={() => setshowPass(!showPass)}
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

        <p className="text-primary font-semibold">
          {t("login.forgotPassword.text")}
        </p>

        <CustomButton type="submit">
          {t("login.button.submitText")}
        </CustomButton>
      </form>
    </div>
  );
};

export default LoginContainer;
