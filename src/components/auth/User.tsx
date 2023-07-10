import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";

export type UserType = {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
};

const User = () => {
	const navigate = useNavigate();
	const { token, firstName, image, lastName } = useSelector(
		(state: RootState) => state.auth.user
	);

	useEffect(() => {
		if (!token) {
			navigate("/sign-in", { replace: true });
		}
	}, []);

	return (
		<section className="py-1S0 container flex">
			<div className="w-full">
				<h1 className="text-center text-3xl font-bold text-primary-header/90">
					Welcome to our store
				</h1>
				<div className="mb-6 flex items-center gap-6">
					<img
						loading="lazy"
						src={image}
						alt="profile image"
						width={100}
						height={100}
						className="rounded-full"
					/>
					<p className="text-xl font-bold text-primary-headdings">
						{`${firstName} ${lastName}`}
					</p>
				</div>
			</div>
		</section>
	);
};

export default User;
