import { useState } from "react";
import { NavLink } from "react-router-dom";
import Brands from "../components/Brands";
import ImageLoader from "../components/ImageLoader";
import CategoriesSection from "../components/categories/CategoriesSection";

const Home = () => {
	const [isBannerLoading, setIsBannerLoading] = useState<boolean>(true);
	const banner = new URL(
		"../assets/images/michael-afonso-b632f-baARE-unsplash.jpg",
		import.meta.url
	).href;

	return (
		<>
			<section className="container">
				<div className="relative h-[500px] overflow-hidden rounded-lg">
					<ImageLoader isImageLoading={isBannerLoading} />
					<div className={`h-full ${!isBannerLoading ? "" : "opacity-0"}`}>
						<img
							onLoad={() => setIsBannerLoading(false)}
							loading="lazy"
							src={banner}
							alt="banner image"
							className="h-full w-full object-cover object-top brightness-50"
						/>
						<div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
							<p className="px:4 mb-6 w-full text-3xl font-bold sm:text-4xl md:px-8 lg:text-6xl">
								Level up your style with our summer collections.
							</p>
							<NavLink to="/products" className="btn btn-alt">
								Shop now
							</NavLink>
						</div>
						I
					</div>
				</div>
			</section>
			<Brands />
			<CategoriesSection />
		</>
	);
};

export default Home;
