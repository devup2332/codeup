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
import { instance } from "../../lib/utils/api/instance";
import { environments } from "../../environemts";

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
		window.location.href = `${environments.API_URL}/auth/google/login`;
	};

	return (
		<div className="flex flex-wrap justify-center items-center h-screen">
			<form
				className="py-10 w-10/12 grid gap-5 md:w-9/12 md:max-w-3xl md:gap-7 xl:grid-cols-2 xl:w-10/12 xl:-translate-y-10"
				onSubmit={handleSubmit(registerUser)}
			>
				<p className="text-center xl:col-start-1 text-3xl xl:text-5xl xl:col-end-3">
					{t("register.title")}{" "}
					<span className="text-primary font-bold">
						{t("register.brandTitle")}
					</span>
				</p>
				<Typography className="text-center xl:col-start-1 xl:col-end-3">
					{t("register.signinText.text")}
					<Link to="/login" className="text-primary font-bold">
						{t("register.signinText.link")}
					</Link>
				</Typography>

				<div className="grid gap-5 md:gap-7 xl:col-start-1 xl:col-end-3 md:grid-cols-2">
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
					<div className="h-px w-full text-primary bg-primary" />
					<span className="absolute bg-white px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						{" "}
						{t("register.or")}
					</span>
				</div>
				<div className="grid gap-5 md:gap-7 xl:grid-cols-6 xl:col-start-1 xl:col-end-3">
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
													<p className="text-sm text-red-500 font-bold">
														{t(`register.fields.${name}.errors.required.text`)}
													</p>
												)}
												{errors[name]?.type === "noEqual" && (
													<p className="text-sm text-red-500 font-bold">
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
													<p className="text-sm text-red-500 font-bold">
														{t(`register.fields.${name}.errors.required.text`)}
													</p>
												)}
												{errors[name]?.type === "pattern" && (
													<p className="text-sm text-red-500 font-bold">
														{t(`register.fields.${name}.errors.pattern.text`)}
													</p>
												)}
												{errors[name]?.type === "emailIsUsed" && (
													<p className="text-sm text-red-500 font-bold">
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
										<p className="text-sm text-red-500 font-bold">
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
						variant="contained"
					>
						<Typography className="py-1 text-white" fontWeight={600}>Register</Typography>
					</CustomButton>
				</div>
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

export default RegisterContainer;
