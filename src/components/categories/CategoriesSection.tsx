import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
	const categories: string[] = [
		"men-clothing",
		"women-clothing",
		"electronics",
		"jewelery",
	];
	const categoriesCards = categories.map((cat, idx) => (
		<CategoryCard key={idx} category={cat} />
	));

	return (
		<section className="container pb-16">
			<h2 className="heading">Categories</h2>
			<div className="grid grid-cols-repeat gap-6 py-8">{categoriesCards}</div>
		</section>
	);
};

export default CategoriesSection;
