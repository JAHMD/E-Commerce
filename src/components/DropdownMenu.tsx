import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

type PropsType = {
	menuName: string;
	children: ReactNode;
	isInFloatingMenu?: boolean;
};

const DropdownMenu = ({ children, menuName, isInFloatingMenu }: PropsType) => {
	const [isListOpen, setIsListOpen] = useState<boolean>(false);
	const btnRef = useRef<HTMLButtonElement>(null);

	const handleClickEven = (e: MouseEvent) => {
		if (btnRef.current !== e.target) {
			setIsListOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickEven);

		return () => {
			document.removeEventListener("click", handleClickEven);
		};
	}, []);

	return (
		<div
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
				{menuName}{" "}
				{isListOpen ? (
					<ChevronUp className="w-4" />
				) : (
					<ChevronDown className="w-4" />
				)}
			</button>
			<ul className={`menu_list ${isListOpen ? "" : "hidden"}`}>{children}</ul>
		</div>
	);
};

export default DropdownMenu;
