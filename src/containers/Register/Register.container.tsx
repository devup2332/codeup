import { Alert, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import {
	CustomButton,
	CustomSelect,
	InputCodeUp,
	SocialButton,
} from "../../components/atoms";
import {
	IconGithub,
	IconGoogle,
	IconNotShowPassword,
	IconShowPassword,
} from "../../components/atoms/Icons";
import countryCodes from "../../lib/utils/countryCodes";
import { registerControls } from "../../lib/utils/registerControls";
import RegisterImage from "../../assets/register.jpg";
import { instance } from "../../lib/utils/api/instance";

const RegisterContainer = () => {
	const { t } = useTranslation("index");
	const [code, setCode] = useState("");
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [showPass, setshowPass] = useState(false);
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	const registerUser = async (data: any) => {
		try {
			setLoading(true);
			const { token, message } = await instance("/auth/register", "POST", data);
			if (!token) {
				setOpen(true);
				setMessage(message);
				setLoading(false);
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

	const loginGoogle = async () => {
		window.location.href = "http://localhost:8000/auth/google/login";
	};

	return (
		<div className="xl:flex">
			<div className="flex justify-center items-center xl:w-8/12 2xl:w-7/12 3xl:w-5/12">
				<form
					className="w-11/12 grid gap-7 max-w-md xl:max-w-4xl xl:grid-cols-2 xl:w-10/12 "
					onSubmit={handleSubmit(registerUser)}
				>
					<Typography
						fontSize={30}
						className="text-center xl:col-start-1 xl:col-end-3"
					>
						{t("register.title")}{" "}
						<span className="text-primary font-bold">
							{t("register.brandTitle")}
						</span>
					</Typography>
					<Typography className="text-center xl:col-start-1 xl:col-end-3">
						{t("register.signinText.text")}
						<Link to="/login" className="text-primary font-bold">
							{t("register.signinText.link")}
						</Link>
					</Typography>

					<div className="grid gap-5 xl:col-start-1 xl:col-end-3 xl:grid-cols-2">
						<SocialButton type="button">
							<IconGithub className="h-7 w-7" />
							{t("register.socialButtons.text")}
							{t("register.socialButtons.github.brand")}
						</SocialButton>
						<SocialButton type="button" onClick={loginGoogle}>
							<IconGoogle className="h-7 w-7" />
							{t("register.socialButtons.text")}
							{t("register.socialButtons.google.brand")}
						</SocialButton>
					</div>
					<div className="text-center relative xl:col-start-1 xl:col-end-3">
						<hr className="h-px w-full text-primary bg-primary" />
						<span className="absolute bg-white px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{" "}
							{t("register.or")}
						</span>
					</div>
					<div className="grid gap-5 xl:grid-cols-6 xl:col-start-1 xl:col-end-3">
						{registerControls.map(
							({ validations, label, name, type, className }, index) =>
								name !== "code" ? (
									type === "password" ? (
										<div className={className} key={index}>
											<InputCodeUp
												label={label}
												type={showPass ? "text" : "password"}
												field={name}
												Icon={showPass ? IconNotShowPassword : IconShowPassword}
												register={register}
												validations={{
													...validations,
													validate: {
														noEqual: (val: string) => {
															if (name === "password") return true;
															const pass = watch("password") as string;
															if (pass === val) return true;
															return false;
														},
													},
												}}
												handleChangeVisibilityPassword={() =>
													setshowPass(!showPass)
												}
											/>
											{errors[name] && (
												<>
													{errors[name]?.type === "required" && (
														<p className="text-xs text-red-500 font-bold">
															{t(
																`register.fields.${name}.errors.required.text`
															)}
														</p>
													)}
													{errors[name]?.type === "noEqual" && (
														<p className="text-xs text-red-500 font-bold">
															{t(`register.fields.${name}.errors.noEqual.text`)}
														</p>
													)}
												</>
											)}
										</div>
									) : (
										<div className={className} key={index}>
											<InputCodeUp
												label={label}
												type={type}
												field={name}
												register={register}
												validations={{
													...validations,
												}}
											/>
											{errors[name] && (
												<>
													{errors[name]?.type === "required" && (
														<p className="text-xs text-red-500 font-bold">
															{t(
																`register.fields.${name}.errors.required.text`
															)}
														</p>
													)}
													{errors[name]?.type === "pattern" && (
														<p className="text-xs text-red-500 font-bold">
															{t(`register.fields.${name}.errors.pattern.text`)}
														</p>
													)}
													{errors[name]?.type === "emailIsUsed" && (
														<p className="text-xs text-red-500 font-bold">
															{t(
																`register.fields.${name}.errors.emailIsUsed.text`
															)}
														</p>
													)}
												</>
											)}
										</div>
									)
								) : (
									<div className={className} key={index}>
										<CustomSelect
											options={countryCodes}
											label={label}
											register={register}
											field={name}
											value={code}
											validations={validations}
											handleChange={(value) => {
												setCode(value);
											}}
										/>
										{errors[name]?.type === "required" && (
											<p className="text-xs text-red-500 font-bold">
												{t(`register.fields.${name}.errors.required.text`)}
											</p>
										)}
									</div>
								)
						)}
						<CustomButton
							type="submit"
							className="xl:col-start-1 xl:col-end-7 flex gap-5"
							loading={loading}
						>
							Submit
						</CustomButton>
					</div>
				</form>
			</div>
			<div className="hidden xl:block xl:w-4/12 h-screen relative 2xl:w-5/12 3xl:w-7/12">
				<img
					src={RegisterImage}
					className="w-full h-full object-cover"
					alt=""
				/>
				<div className="w-full h-full bg-black bg-opacity-50 absolute top-0 left-0"></div>
			</div>
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

export default RegisterContainer;
