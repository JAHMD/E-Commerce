import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { ProductType } from "./AllProducts";

const CATEGORY_URL = "https://fakestoreapi.com/products/category";

const CategoryPage = () => {
	const { cat } = useParams();
	const catName: string | undefined = cat?.replace("-", " ");
	const { isLoading, error, data } = useQuery(
		"catData",
		(): Promise<ProductType[] | undefined> =>
			fetch(`${CATEGORY_URL}/${catName}`).then((res) => res.json())
	);

	if (isLoading) {
		return <LoaderComponent />;
	}

	if (error) {
		return <p>error</p>;
	}

	return (
		<section className="">
			<div className="container">
				<h1 className="py-4 text-center text-4xl font-bold capitalize text-primary-main-headdings">
					{catName}
				</h1>
				<div className="mt-12 grid grid-cols-repeat gap-8">
					{data?.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
