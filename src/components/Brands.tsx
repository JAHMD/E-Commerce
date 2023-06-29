const Brands = () => {
	const brands: string[] = [
		"adidas",
		"chanel",
		"ck",
		"dg",
		"gucci",
		"guess",
		"levis",
		"versace",
	];

	const brandsElements = brands.map((brand) => {
		const brandImg = new URL(`../assets/images/${brand}.png`, import.meta.url)
			.href;
		return (
			<li key={brand} className="shrink-0">
				<img
					loading="lazy"
					src={brandImg}
					alt={`${brand} brand logo`}
					className="aspect-square w-16 object-contain contrast-[0.6]"
				/>
			</li>
		);
	});

	return (
		<section className="my-10 bg-primary-footer">
			<h2 className="heading text-center">Brands</h2>
			<div className="relative overflow-hidden py-16">
				<span className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-primary-footer to-transparent"></span>
				<span className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-primary-footer to-transparent"></span>
				<div className="flex min-w-[800px] animate-Infinity-scroll">
					<ul className="brands_list">{brandsElements}</ul>
					<ul className="brands_list">{brandsElements}</ul>
				</div>
			</div>
		</section>
	);
};

export default Brands;
