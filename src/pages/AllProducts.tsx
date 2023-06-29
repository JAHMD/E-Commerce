import { useQuery } from "react-query";
import LoaderComponent from "../components/Loader";
import ProductCard from "../components/ProductCard";

export type ProductType = {
	id: string | number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

const URL = "https://fakestoreapi.com/products";

const AllProducts = () => {
	const { isLoading, error, data } = useQuery(
		"allProducts",
		(): Promise<ProductType[] | undefined> =>
			fetch(URL).then((res) => res.json())
	);

	return (
		<section className="container">
			{isLoading ? (
				<LoaderComponent />
			) : error ? (
				<div>error</div>
			) : (
				<div className="grid grid-cols-repeat gap-8">
					{data?.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			)}
		</section>
	);
};

export default AllProducts;
