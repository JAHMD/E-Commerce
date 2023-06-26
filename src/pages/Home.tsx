import { NavLink } from "react-router-dom";
import Brands from "../components/Brands";
import CategoriesSection from "../components/categories/CategoriesSection";

const Home = () => {
	const banner = new URL(
		"../assets/images/michael-afonso-b632f-baARE-unsplash.jpg",
		import.meta.url
	).href;

	return (
		<section className="py-10">
			<div className="container">
				<div className="relative h-[500px] overflow-hidden rounded-lg">
					<img
						loading="lazy"
						src={banner}
						alt="banner image"
						className="h-full w-full object-cover object-top brightness-50"
					/>
					<div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
						<p className="px:4 mb-6 w-full text-3xl font-bold sm:text-4xl md:px-8 lg:text-6xl">
							Level up your style with our summer collections.
						</p>
						<NavLink to="/shop" className="btn btn-alt">
							Shop now
						</NavLink>
					</div>
				</div>
			</div>
			<Brands />
			<CategoriesSection />
		</section>
	);
};

export default Home;