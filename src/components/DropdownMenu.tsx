import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type PropsType = {
	menuName: string;
	children: ReactNode;
	btnRef: React.RefObject<HTMLButtonElement>;
};

const DropdownMenu = ({ children, btnRef, menuName }: PropsType) => {
	const [isListOpen, setIsListOpen] = useState<boolean>(false);

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
		<div className="relative">
			<button
				ref={btnRef}
				className="nav_btn px-4"
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
