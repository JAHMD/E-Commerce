import { QueryCache, useQuery } from "react-query";
import LoaderComponent from "../components/Loader";
import ProductCard from "../components/ProductCard";

const queryCache = new QueryCache({
	onError: (error) => {
		console.log(error);
	},
	onSuccess: (data) => {
		console.log(data);
	},
});

export type ProductType = {
	id: string | number;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: number;
	discountPercentage: number;
	brand: string;
	thumbnail: string;
	images: string[];
};

const URL = "https://dummyjson.com/products";

const AllProducts = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ["all-products"],
		queryFn: () => fetch(URL).then((res) => res.json()),
	});

	const query = queryCache.find("posts") || data?.products;

	if (isLoading) {
		return <LoaderComponent />;
	}

	if (error instanceof Error) {
		return <p>An error has occurred: {error.message}</p>;
	}

	return (
		<section className="container">
			<h1 className="mb-6 py-4 text-center text-4xl font-bold capitalize text-primary-main-headdings">
				All products
			</h1>
			<div className="grid grid-cols-repeat gap-8">
				{query.map((product: ProductType) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default AllProducts;
