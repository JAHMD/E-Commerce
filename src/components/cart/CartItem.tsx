import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
	CartItemType,
	updateItemQty,
} from "../../redux/features/cart/cartSlice";

type PropsType = {
	item: CartItemType;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartItem = ({ item, setIsCartOpen }: PropsType) => {
	const dispatch = useDispatch();
	const location = useLocation();

	const { thumbnail, title, price, quantity, id } = item;
	const disPrice = new Intl.NumberFormat("en-UA", {
		style: "currency",
		currency: "USD",
	}).format(price);

	const handQuantityClick = (qty: number) => {
		dispatch(updateItemQty({ id, qty }));
	};

	return (
		<article className="grid grid-cols-6 items-center gap-3 rounded-md bg-white p-3">
			<NavLink
				to={`/products/${id}`}
				state={{ path: location.pathname }}
				onClick={() => setIsCartOpen(false)}
				className="col-span-5 grid grid-cols-5 gap-3"
			>
				<img
					src={thumbnail}
					alt={`${title} image`}
					className="col-span-2 h-[90px] w-full rounded-lg object-cover object-center"
				/>
				<div className="col-span-3">
					<h3 className="w-[12rem] max-w-full truncate text-base font-medium capitalize text-primary-header">
						{title}
					</h3>
					<p className="mt-1 text-sm text-slate-600">{disPrice}</p>
				</div>
			</NavLink>
			<div className="ml-auto flex flex-col items-center gap-1">
				<button
					className=" flex items-center justify-center rounded-md bg-gray-100 p-0.5 transition-colors hover:bg-gray-200"
					onClick={() => handQuantityClick(1)}
				>
					<ChevronUp />
				</button>
				<span className="inline-block">{quantity}</span>
				<button
					className=" flex items-center justify-center rounded-md bg-gray-100 p-0.5 transition-colors hover:bg-gray-200"
					onClick={() => handQuantityClick(-1)}
				>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
};

export default CartItem;
