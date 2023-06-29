import { Star } from "lucide-react";
import { ProductType } from "../pages/AllProducts";

const ProductCard = (props: ProductType) => {
	const { image, title, price, rating } = props;
	const disPrice = new Intl.NumberFormat("en-UA", {
		style: "currency",
		currency: "USD",
	}).format(price);
	const rate = Number(rating.rate.toFixed(0));

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
				} stroke-primary-header`}
			/>
		));

	return (
		<article className="overflow-hidden rounded-lg border-2 bg-primary-footer shadow-light">
			<div className="h-32 overflow-hidden">
				<img
					loading="lazy"
					src={image}
					alt={`${title} image`}
					className="h-full w-full object-cover object-top"
				/>
			</div>
			<div className="p-4">
				<h2 className="font-medium text-primary-header">{title}</h2>
				<div className="mt-4 flex items-center gap-2">
					<span className="flex w-20">{stars}</span>
					<p className="shrink-0">
						({rating.rate}) {rating.count}
					</p>
				</div>
				<p className="pt-2">{disPrice}</p>
			</div>
		</article>
	);
};

export default ProductCard;
