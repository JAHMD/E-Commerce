import { Loader } from "lucide-react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, setUserData } from "../../redux/features/auth/authSlice";
import { RootState } from "../../redux/store/store";

interface IFormInput {
	userName: string;
	password: string;
}

const SignIn = () => {
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.user.token);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (inputData) => {
		try {
			const user = await fetch("https://dummyjson.com/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: inputData.userName,
					password: inputData.password,
				}),
			});
			const returnedData = await user.json();

			if (user.ok) {
				console.log(returnedData);
				dispatch(login());
				dispatch(setUserData(returnedData));
				navigate("/user", { replace: true });
			}
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
	};

	useEffect(() => {
		if (token) {
			navigate("/user", { replace: true });
		}
	}, [token, navigate]);

	return (
		<section className="contaienr flex flex-col items-center justify-center">
			<form
				action=""
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
				<button
					className="btn btn-primary relative disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-primary-header"
					disabled={isSubmitting ? true : false}
				>
					{isSubmitting ? (
						<Loader className="absolute left-4 w-5 animate-spin" />
					) : null}{" "}
					Submit
				</button>
			</form>
			<div className="mt-6 text-slate-500">
				<p className="flex gap-4">
					<span className="font-semibold capitalize">username:</span>
					kminchelle
				</p>
				<p className="flex gap-4">
					<span className="font-semibold capitalize">pass:</span> 0lelplR
				</p>
			</div>
		</section>
	);
};

export default SignIn;
