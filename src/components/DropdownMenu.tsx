import { ReactNode, useEffect, useRef, useState } from "react";

type PropsType = {
	menuName: string;
	children: ReactNode;
	isInFloatingMenu?: boolean;
	closeMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownMenu = ({
	children,
	menuName,
	isInFloatingMenu,
	closeMenu,
}: PropsType) => {
	const [isListOpen, setIsListOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);

	const handleMouseOver = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (menuRef.current?.contains(target)) {
			setIsListOpen(true);
		} else setIsListOpen(false);
	};

	const handleClickEvent = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (menuRef.current?.contains(target)) {
			setIsListOpen((prevState) => !prevState);
			if (closeMenu && target !== btnRef.current) {
				closeMenu(false);
			}
		} else {
			setIsListOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickEvent);
		document.addEventListener("mouseover", handleMouseOver);

		return () => {
			document.addEventListener("click", handleClickEvent);
			document.addEventListener("mouseover", handleMouseOver);
		};
	}, []);

	return (
		<div
			ref={menuRef}
			className={`relative shrink-0 ${isInFloatingMenu ? "w-full px-6" : ""}`}
		>
			<button
				ref={btnRef}
				className={`nav_btn ${
					isInFloatingMenu
						? "flex w-full items-center justify-between border-b border-b-slate-500 pb-4"
						: "px-4"
				}`}
				onClick={() => setIsListOpen((oldState) => !oldState)}
			>
				{menuName} {isListOpen ? "" : ""}
			</button>
			{isListOpen ? <ul className={`menu_list`}>{children}</ul> : null}
		</div>
	);
};

export default DropdownMenu;
