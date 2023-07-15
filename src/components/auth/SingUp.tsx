import { Loader } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, setUserData } from "../../redux/features/auth/authSlice";

interface IFormInput {
	userName: string;
	password: string;
	confPassword: string;
}

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (inputData) => {
		try {
			if (inputData.password === inputData.confPassword) {
				const user = await fetch("https://dummyjson.com/users/add", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: inputData.userName,
						password: inputData.password,
					}),
				});
				const returnedData = await user.json();
				console.log(returnedData);
				if (user.ok) {
					dispatch(login());
					dispatch(setUserData(returnedData));
					navigate("/user", { replace: true });
					return returnedData;
				}
			}
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
	};

	return (
		<section className="contaienr flex flex-col items-center justify-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex w-80 max-w-full flex-col gap-6 rounded-md bg-primary-footer p-8 text-primary-main-headdings"
			>
				<div className="form_field">
					<label htmlFor="user-name">User name</label>
					<input
						placeholder="Enter your username"
						{...register("userName", {
							required: "Username is required",
							pattern: {
								message: "Username must start with an alphabet",
								value: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
							},
							minLength: {
								message: "Username must be at least 8 characters",
								value: 8,
							},
						})}
						aria-invalid={errors.userName ? "true" : "false"}
					/>
					{errors.userName && <p role="alert">{errors.userName.message}</p>}
				</div>
				<div className="form_field">
					<label htmlFor="password">Password</label>
					<input
						placeholder="Enter your password"
						type="password"
						{...register("password", {
							required: "Password is required",
							pattern: {
								message: "Minimum eight characters and numbers",
								value: /^[A-Za-z0-9]{6,}$/,
							},
							minLength: {
								message: "Password must be at least 6 characters",
								value: 6,
							},
						})}
						aria-invalid={errors.password ? "true" : "false"}
					/>
					{errors.password && <p role="alert">{errors.password.message}</p>}
				</div>
				<div className="form_field">
					<label htmlFor="conf-password">Confirm password</label>
					<input
						placeholder="Enter your password"
						type="password"
						{...register("confPassword", {
							required: "Password is required",
							pattern: {
								message: "Minimum eight characters and numbers",
								value: /^[A-Za-z0-9]{6,}$/,
							},
							minLength: {
								message: "Password must be at least 6 characters",
								value: 6,
							},
						})}
						aria-invalid={errors.confPassword ? "true" : "false"}
					/>
					{errors.confPassword && (
						<p role="alert">{errors.confPassword?.message}</p>
					)}
				</div>
				<button
					className="btn btn-primary relative disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-primary-header"
					disabled={isSubmitting ? true : false}
				>
					{isSubmitting ? (
						<Loader className="absolute left-4 w-5 animate-spin" />
					) : null}{" "}
					Sign up
				</button>
			</form>
			<p className="mt-6 text-sm text-slate-500">
				Do you have an account?{" "}
				<Link to="/sign-in" className="font-medium underline">
					Sign in
				</Link>
			</p>
		</section>
	);
};

export default SignUp;
