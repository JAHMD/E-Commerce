import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
	const categories: string[] = [
		"men's-clothing",
		"women's-clothing",
		"electronics",
		"jewelery",
	];

	return (
		<section className="container">
			<h2 className="heading">Categories</h2>
			<div className="grid grid-cols-repeat gap-6 py-8">
				{categories.map((cat, idx) => (
					<CategoryCard key={idx} category={cat} />
				))}
			</div>
		</section>
	);
};

export default CategoriesSection;
