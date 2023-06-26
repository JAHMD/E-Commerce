import { useAuth } from "@clerk/clerk-react";
import { ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const { userId } = useAuth();

	return (
		<header className="bg-primary-header text-white">
			<nav className=" container flex items-center justify-between gap-4 p-6">
				<Link to="/">
					<h1 className="font-lobster text-4xl font-bold">Store</h1>
				</Link>
				<div className="flex items-center gap-4">
					<NavLink to="/" end className="nav_link">
						Home
					</NavLink>
					<NavLink to="/shop" className="nav_link">
						Products
					</NavLink>
					{userId ? (
						<button className="nav_btn">
							<ShoppingCart />
						</button>
					) : null}
					<NavLink to="/sign-in" className="nav_btn">
						<User />
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
