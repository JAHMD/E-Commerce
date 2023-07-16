import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import NavMenuItems from "./NavMenuItems";
import { NavItemType } from "./Navbar";

type PropsType = {
	lobbyItems: NavItemType[];
	clothingItems: NavItemType[];
	closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
	shoesItems: NavItemType[];
	accessoriesItems: NavItemType[];
};

const FloatingMenu = ({
	lobbyItems,
	clothingItems,
	closeMenu,
	shoesItems,
	accessoriesItems,
}: PropsType) => {
	return createPortal(
		<div className="fixed left-0 top-0 z-20 h-full w-full bg-primary-header/50 text-white">
			<div className="flex h-full w-80 max-w-full animate-right-translation flex-col items-center gap-10 bg-primary-header py-6 shadow-sm">
				<div className="flex w-full items-center justify-between px-6 sm:w-auto sm:px-0">
					<Link to="/" className="font-lobster text-2xl font-bold">
						Store
					</Link>
					<button className="" onClick={() => closeMenu(false)}>
						<X />
					</button>
				</div>
				<div className="w-full space-y-4">
					<DropdownMenu
						menuName="Lobby"
						isInFloatingMenu={true}
						closeMenu={closeMenu}
					>
						<NavMenuItems items={lobbyItems} />
					</DropdownMenu>
					<DropdownMenu
						menuName="Clothing"
						isInFloatingMenu={true}
						closeMenu={closeMenu}
					>
						<NavMenuItems items={clothingItems} />
					</DropdownMenu>

					<DropdownMenu
						menuName="Shoes"
						isInFloatingMenu={true}
						closeMenu={closeMenu}
					>
						<NavMenuItems items={shoesItems} />
					</DropdownMenu>

					<DropdownMenu
						menuName="Accessories"
						isInFloatingMenu={true}
						closeMenu={closeMenu}
					>
						<NavMenuItems items={accessoriesItems} />
					</DropdownMenu>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default FloatingMenu;
