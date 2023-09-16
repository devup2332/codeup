import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import {
	CustomButton,
	InputCodeUp,
	SocialButton,
} from "../../components/atoms";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
	IconEmail,
	IconGithub,
	IconGoogle,
	IconNotShowPassword,
	IconShowPassword,
} from "../../components/atoms/Icons";
import { emailRex } from "../../lib/utils/reg";
import { Alert, Snackbar, Typography } from "@mui/material";
import { environments } from "../../environemts";
import AuthApi from "../../lib/utils/api/api";

const LoginContainer = () => {
	const { t } = useTranslation("index");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPass, setshowPass] = useState(false);
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const loginUser: SubmitHandler<FieldValues> = async ({ email, password }) => {
		try {
			setLoading(true);
			const { token, message } = await AuthApi.loginUser({ email, password });
			if (!token) {
				setLoading(false);
				setOpen(true);
				setMessage(message);
				return;
			}
			setLoading(false);
			navigate("/");
		} catch (err) {
			setOpen(true);
			setLoading(false);
			setMessage((err as Error).message);
		}
	};

	const loginSocial = (service: string) => {
		const url = `${environments.API_URL}/auth/${service}`;
		window.location.href = url;
	};

	const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	return (
		<div className="w-full flex flex-wrap justify-center items-center h-screen">
			<form
				className="py-10 grid gap-5 w-10/12 max-w-md md:gap-7 xl:-translate-y-10"
				onSubmit={handleSubmit(loginUser)}
			>
				<h1 className="text-3xl xl:text-4xl text-center">
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
					{t("login.socialButton.text")}
					{t("login.socialButton.github.brand")}
				</SocialButton>
				<SocialButton
					type="button"
					onClick={() => {
						loginSocial("google");
					}}
				>
					<IconGoogle className="h-7 w-7" />
					{t("login.socialButton.text")}
					{t("login.socialButton.google.brand")}
				</SocialButton>
				<div className="text-center relative">
					<div className="h-px w-full bg-primary" />
					<span className="absolute bg-white px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						{" "}
						{t("register.or")}
					</span>
				</div>

				<div className="grid gap-5">
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
								<p className="text-red-400 text-sm font-bold">
									{t("login.errors.email.required.text")}
								</p>
							)}
							{errors.email.type === "pattern" && (
								<p className="text-red-400 text-sm font-bold">
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
					<p className="text-red-400 text-sm font-bold">
						{errors.password?.type === "required" &&
							t("login.errors.password.required.text")}
					</p>
				</div>
				<Link to="/forgotpassword" className="text-primary font-semibold w-fit">
					{t("login.forgotPassword.text")}
				</Link>
				<CustomButton variant="contained" type="submit" loading={loading}>
					<Typography className="text-white py-1" fontWeight={700}>
						{" "}
						{t("login.button.submitText")}
					</Typography>
				</CustomButton>
			</form>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="error">
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default LoginContainer;
