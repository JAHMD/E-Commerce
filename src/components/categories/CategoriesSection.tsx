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
		</section>
	);
};

export default CategoriesSection;
