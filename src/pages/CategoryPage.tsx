import { MoveLeft, MoveRight } from "lucide-react";
import { useQuery } from "react-query";
import { NavLink, useParams } from "react-router-dom";
import LoaderComponent from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { ProductType } from "./AllProducts";

import { QueryCache } from "react-query";

const queryCache = new QueryCache({
	onError: (error) => {
		console.log(error);
	},
	onSuccess: (data) => {
		console.log(data);
	},
});

const CATEGORY_URL = "https://dummyjson.com/products/category";

const CategoryPage = () => {
	const { cat } = useParams();
	const catName: string | undefined = cat?.replace("-", " ");

	const { isLoading, error, data } = useQuery({
		queryKey: [`${cat}`],
		queryFn: () => fetch(`${CATEGORY_URL}/${cat}`).then((res) => res.json()),
	});

	const query = queryCache.find(`${cat}`) || data?.products;

	if (isLoading) {
		return <LoaderComponent />;
	}

	if (error instanceof Error) {
		return <p>An error has occurred: {error.message}</p>;
	}

	return (
		<section className="">
			<div className="container">
				<div className="item-center flex flex-wrap justify-between gap-4">
					<NavLink to=".." className="link">
						<MoveLeft />
						All categories
					</NavLink>
					<NavLink to="/products" className="link">
						All products <MoveRight />
					</NavLink>
				</div>
				<h1 className="py-6 text-center text-4xl font-bold capitalize text-primary-main-headdings">
					{catName}
				</h1>
				<div className="mt-10 grid grid-cols-repeat gap-8">
					{query.map((product: ProductType) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
