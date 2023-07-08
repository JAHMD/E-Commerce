import { ShoppingCart, User } from "lucide-react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import NavMenuItems from "./NavMenuItems";

const Navbar = () => {
	const lobbyRef = useRef<HTMLButtonElement>(null);
	const clothingRef = useRef<HTMLButtonElement>(null);

	const lobbyItems = [
		{ name: "home", path: "/" },
		{ name: "categories", path: "/categories" },
		{ name: "all products", path: "/products" },
	];

	const clothingItems = [
		{ name: "tops", path: "/categories/tops" },
		{ name: "women's dresses", path: "/categories/womens-dresses" },
		{ name: "men's shirts", path: "/categories/mens-shirts" },
	];

	return (
		<header className="bg-primary-header text-white">
			<nav className="container flex items-center justify-between gap-4 p-6">
				<div className="flex items-center gap-4">
					<Link to="/">
						<h1 className="font-lobster text-2xl font-bold">Store</h1>
					</Link>

					<DropdownMenu btnRef={lobbyRef} menuName="Lobby">
						<NavMenuItems items={lobbyItems} />
					</DropdownMenu>
					<DropdownMenu btnRef={clothingRef} menuName="Clothing">
						<NavMenuItems items={clothingItems} />
					</DropdownMenu>
				</div>

				<div className=" flex w-fit items-center gap-4">
					<button className="nav_btn">
						<ShoppingCart />
					</button>
					<NavLink to="/user" className="nav_btn">
						<User />
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
