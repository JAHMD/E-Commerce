import { SignIn, SignOutButton, useUser } from "@clerk/clerk-react";

const Auth = () => {
	const { isSignedIn, user, isLoaded } = useUser();

	if (!isLoaded) {
		return <p>Loadding...</p>;
	}

	return (
		<section className="container flex py-10">
			{isSignedIn ? (
				<div className="w-full">
					<h1 className="text-center text-3xl font-bold text-primary-header/90">
						Welcome to our store
					</h1>
					<div className="mb-6 flex items-center gap-6">
						<img
							loading="lazy"
							src={user.profileImageUrl}
							alt="profile image"
							width={100}
							height={100}
							className="rounded-full"
						/>
						<p className="text-xl font-bold text-primary-headdings">
							{`${user.firstName} ${user.lastName}`}
						</p>
					</div>
					<div className="sign-out btn-primary rounded-md">
						<SignOutButton />
					</div>
				</div>
			) : (
				<div className="mx-auto">
					<SignIn />
				</div>
			)}
		</section>
	);
};

export default Auth;