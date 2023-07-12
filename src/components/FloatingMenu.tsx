import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import NavMenuItems from "./NavMenuItems";
import { NavItemType } from "./Navbar";

type PropsType = {
	lobbyItems: NavItemType[];
	clothingItems: NavItemType[];
	toggleMenu: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const FloatingMenu = ({ lobbyItems, clothingItems, toggleMenu }: PropsType) => {
	return createPortal(
		<div className="fixed left-0 top-0 z-20 h-screen w-screen bg-primary-header/60 text-white">
			<div className="flex h-screen w-80 max-w-full flex-col items-center gap-10 bg-primary-header py-6 shadow-sm">
				<div className="flex w-full items-center justify-between px-6 sm:w-auto sm:px-0">
					<Link to="/" className="font-lobster text-2xl font-bold">
						Store
					</Link>
					<button className="" onClick={() => toggleMenu(false)}>
						<X />
					</button>
				</div>
				<div className="w-full space-y-4">
					<DropdownMenu menuName="Lobby" isInFloatingMenu={true}>
						<NavMenuItems items={lobbyItems} />
					</DropdownMenu>
					<DropdownMenu menuName="Clothing" isInFloatingMenu={true}>
						<NavMenuItems items={clothingItems} />
					</DropdownMenu>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default FloatingMenu;
