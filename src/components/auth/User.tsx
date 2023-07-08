import { useNavigate } from "react-router-dom";

type UserType = {
	id: string | number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
};

const userLoader = async () => {
	return null;
};

// kminchelle pass: 0lelplR

const User = () => {
	const navigate = useNavigate();
	const user = {};
	const token = false;

	if (!token) {
		navigate("/sign-in", { replace: true });
		return;
	}

	return (
		<section className="py-1S0 container flex">
			<div className="w-full">
				<h1 className="text-center text-3xl font-bold text-primary-header/90">
					Welcome to our store
				</h1>
				<div className="mb-6 flex items-center gap-6">
					<img
						loading="lazy"
						src={""}
						alt="profile image"
						width={100}
						height={100}
						className="rounded-full"
					/>
					<p className="text-xl font-bold text-primary-headdings">
						{/* {`${user.firstName} ${user.lastName}`} */}
					</p>
				</div>
			</div>
		</section>
	);
};

export default User;
