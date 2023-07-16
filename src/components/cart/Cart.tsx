import { X } from "lucide-react";
import { memo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import CartItem from "./CartItem";

type PropsType = {
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	cartBtnRef: React.RefObject<HTMLButtonElement>;
};

const Cart = memo(({ setIsCartOpen }: PropsType) => {
	const { cartItems, qty, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);

	const disPrice = new Intl.NumberFormat("en-UA", {
		style: "currency",
		currency: "USD",
	}).format(totalPrice);
	const cartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickEvent = (e: MouseEvent) => {
			e.stopPropagation();
			const target = e.target as HTMLElement;
			if (target === cartRef.current) {
				setIsCartOpen(false);
			}
		};

		document.addEventListener("click", handleClickEvent);

		return () => document.addEventListener("click", handleClickEvent);
	}, []);

	return createPortal(
		<div
			ref={cartRef}
			className="fixed right-0 top-0 z-20 w-full bg-primary-header/50"
		>
			<div className="ml-auto flex h-screen w-[450px] max-w-full animate-left-translation flex-col gap-4 overflow-hidden bg-primary-footer px-6 py-4 text-primary-header shadow-md">
				<div className="flex items-center justify-between">
					<p className=" font-medium">Cart</p>
					<button className="" onClick={() => setIsCartOpen(false)}>
						<X />
					</button>
				</div>
				<ul className="flex flex-col gap-4 overflow-y-auto rounded-md">
					{cartItems.map((item) => (
						<CartItem key={item.id} item={item} setIsCartOpen={setIsCartOpen} />
					))}
				</ul>
				<div className="mt-auto rounded-md bg-slate-300/80 p-4 font-medium text-primary-main-headdings">
					<p>Total items: {qty}</p>
					<p>Total price: {disPrice}</p>
				</div>
			</div>
		</div>,
		document.body
	);
});

export default Cart;
