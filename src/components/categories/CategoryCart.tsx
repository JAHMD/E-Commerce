import { NavLink } from "react-router-dom";

type PropsType = {
	category: string;
};

const CategoryCart = ({ category }: PropsType) => {
	const img = new URL(
		`../../assets/images/${category}-unsplash.jpg`,
		import.meta.url
	).href;

	return (
		<div className="group relative overflow-hidden rounded-md drop-shadow-lg">
			<img
				src={img}
				alt={`${category} image`}
				className="h-full object-cover transition-transform duration-200 group-hover:scale-105"
			/>
			<div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-black/40 py-6">
				<NavLink to="" className="btn btn-alt">
					{category}
				</NavLink>
			</div>
		</div>
	);
};

export default CategoryCart;
