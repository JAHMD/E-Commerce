import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
	const categories: string[] = [
		"smartphones",
		"skincare",
		"womens-dresses",
		"mens-shirts",
	];

	return (
		<section className="container">
			<h2 className="heading">Main Categories</h2>
			<div className="grid grid-cols-repeat gap-6 py-8">
				{categories.map((cat, idx) => (
					<CategoryCard key={idx} category={cat} />
				))}
			</div>
			<div className="flex w-full justify-center">
				<Link to="/categories" className="btn btn-alt border-2 border-gray-300">
					All categories
				</Link>
			</div>
		</section>
	);
};

export default CategoriesSection;
