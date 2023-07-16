import { Menu, ShoppingCart, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../redux/store/store";
import DropdownMenu from "./DropdownMenu";
import FloatingMenu from "./FloatingMenu";
import NavMenuItems from "./NavMenuItems";
import Cart from "./cart/Cart";

export type NavItemType = {
	name: string;
	path: string;
};

const Navbar = () => {
	const cartBtnRef = useRef<HTMLButtonElement>(null);

	const qty = useSelector((state: RootState) => state.cart.qty);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

	const lobbyItems: NavItemType[] = [
		{ name: "home", path: "/" },
		{ name: "products", path: "/products" },
		{ name: "categories", path: "/categories" },
	];

	const clothingItems: NavItemType[] = [
		{ name: "tops", path: "/categories/tops" },
		{ name: "women's dresses", path: "/categories/womens-dresses" },
		{ name: "men's shirts", path: "/categories/mens-shirts" },
	];

	const shoesItems: NavItemType[] = [
		{ name: "women's shoes", path: "/categories/womens-shoes" },
		{ name: "men's shoes", path: "/categories/mens-shoes" },
	];

	const accessoriesItems: NavItemType[] = [
		{ name: "men's watches", path: "/categories/mens-watches" },
		{ name: "women's watches", path: "/categories/womens-watches" },
		{ name: "women's jewellery", path: "/categories/womens-jewellery" },
		{ name: "sunglasses", path: "/categories/sunglasses" },
	];

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (screen.width > 640) {
				setIsMenuOpen(false);
			}
		});

		return () => {
			window.removeEventListener("resize", () => {
				if (screen.width > 640) {
					setIsMenuOpen(false);
				}
			});
		};
	}, []);

	return (
		<header className="sticky top-0 z-20 bg-primary-header text-white shadow-md">
			<nav className="container flex items-center justify-between gap-4 p-6">
				<button
					className="nav_btn md:hidden"
					onClick={() => setIsMenuOpen(true)}
				>
					<Menu />
				</button>
				<div className="hidden items-center gap-2 md:flex">
					<h1 className="md:mr-4">
						<Link to="/" className="font-lobster text-2xl font-bold">
							Store
						</Link>
					</h1>

					<DropdownMenu menuName="Lobby">
						<NavMenuItems items={lobbyItems} />
					</DropdownMenu>

					<DropdownMenu menuName="Clothing">
						<NavMenuItems items={clothingItems} />
					</DropdownMenu>

					<DropdownMenu menuName="Shoes">
						<NavMenuItems items={shoesItems} />
					</DropdownMenu>

					<DropdownMenu menuName="Accessories">
						<NavMenuItems items={accessoriesItems} />
					</DropdownMenu>
				</div>

				{isMenuOpen ? (
					<FloatingMenu
						clothingItems={clothingItems}
						lobbyItems={lobbyItems}
						closeMenu={setIsMenuOpen}
						shoesItems={shoesItems}
						accessoriesItems={accessoriesItems}
					/>
				) : null}

				<div className="flex w-fit items-center gap-4">
					<button
						ref={cartBtnRef}
						className="nav_btn relative"
						onClick={() => setIsCartOpen(true)}
					>
						<ShoppingCart />
						<span className="absolute right-0 top-0 flex aspect-square w-5 min-w-fit translate-x-1/2 items-center justify-center rounded-full bg-primary-footer text-xs font-bold text-primary-headdings">
							{qty}
						</span>
					</button>
					{isCartOpen ? (
						<Cart setIsCartOpen={setIsCartOpen} cartBtnRef={cartBtnRef} />
					) : null}
					<NavLink to="/user" className="nav_btn">
						<User />
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
