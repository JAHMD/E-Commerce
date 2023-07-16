import { Star } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { ProductType } from "../pages/AllProducts";
import { addItem } from "../redux/features/cart/cartSlice";
import { RootState } from "../redux/store/store";
import ImageLoader from "./ImageLoader";

type PropsType = {
	product: ProductType;
};

const ProductCard = ({ product }: PropsType) => {
	const location = useLocation();
	const { thumbnail, title, price, rating, id } = product;

	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const isCartItem = cartItems.find((cartItem) => cartItem.id === id);

	const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
	const disPrice = new Intl.NumberFormat("en-UA", {
		style: "currency",
		currency: "USD",
	}).format(price);

	const rate = Math.trunc(rating);
	const starsValues = `${"gold ".repeat(rate)}${"gray ".repeat(
		5 - rate
	)}`.split(" ");

	const stars = starsValues
		.filter((item) => item)
		.map((item, idx) => (
			<Star
				key={idx}
				className={`${
					item === "gold" ? "fill-amber-400" : ""
				} stroke-slate-600`}
			/>
		));

	const handleAddToCart = () => {
		dispatch(addItem({ ...product, quantity: 1 }));
	};

	return (
		<article className="overflow-hidden rounded-lg border-2 bg-primary-footer shadow-light">
			<NavLink
				to={`/products/${product.id}`}
				state={{ path: location.pathname }}
				className="group"
			>
				<div className="relative overflow-hidden">
					<ImageLoader isImageLoading={isImageLoading} />
					<div className={`h-32 ${isImageLoading ? "opacity-0" : ""}`}>
						<img
							onLoad={() => setIsImageLoading(false)}
							loading="lazy"
							src={thumbnail}
							alt={`${title} image`}
							className="h-full w-full object-contain object-top mix-blend-darken transition-transform group-hover:scale-110"
						/>
					</div>
				</div>
				<div className="p-4 text-primary-header">
					<h2 className="truncate font-medium capitalize text-primary-header">
						{title}
					</h2>
					<div className="mt-2 flex items-center gap-2">
						<span className="flex w-20">{stars}</span>
						<p className="shrink-0">({rating})</p>
					</div>
					<p className="pt-2 text-sm text-slate-600">{disPrice}</p>
				</div>
			</NavLink>
			<div className="p-4">
				{isCartItem ? (
					<p className="rounded-md bg-slate-300/80 p-2 text-center font-semibold text-primary-header">
						In cart
					</p>
				) : (
					<button className="btn btn-primary w-full" onClick={handleAddToCart}>
						Add to cart
					</button>
				)}
			</div>
		</article>
	);
};

export default ProductCard;
