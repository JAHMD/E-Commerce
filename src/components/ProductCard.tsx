import { Star } from "lucide-react";
import { useState } from "react";
import { ProductType } from "../pages/AllProducts";
import ImageLoader from "./ImageLoader";

type PropsType = {
	product: ProductType;
};

const ProductCard = ({ product }: PropsType) => {
	const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
	const { thumbnail, title, price, rating } = product;
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

	return (
		<article className="overflow-hidden rounded-lg border-2 bg-primary-footer pt-4 shadow-light">
			<div className="relative overflow-hidden">
				<ImageLoader isImageLoading={isImageLoading} />
				<div className={`h-32 ${isImageLoading ? "opacity-0" : ""}`}>
					<img
						onLoad={() => setIsImageLoading(false)}
						loading="lazy"
						src={thumbnail}
						alt={`${title} image`}
						className=" h-full w-full object-contain object-top mix-blend-darken"
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
			<div className="p-4">
				<button className="btn btn-primary w-full">Add to cart</button>
			</div>
		</article>
	);
};

export default ProductCard;
