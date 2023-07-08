import { QueryCache, useQuery } from "react-query";
import LoaderComponent from "../components/Loader";
import CategoryCard from "../components/categories/CategoryCard";

const queryCache = new QueryCache({
	onError: (error) => {
		console.log(error);
	},
	onSuccess: (data) => {
		console.log(data);
	},
});

const URL = "https://dummyjson.com/products/categories";

const AllCategories = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ["all-categories"],
		queryFn: () => fetch(URL).then((res) => res.json()),
	});

	const query = queryCache.find("all-categories") || data;

	if (isLoading) {
		return <LoaderComponent />;
	}

	if (error instanceof Error) {
		return <p>An error has occurred: {error.message}</p>;
	}
	return (
		<section className="container">
			<h1 className="mb-6 py-4 text-center text-4xl font-bold capitalize text-primary-main-headdings">
				All categories
			</h1>
			<div className="grid grid-cols-repeat gap-8">
				{query?.map((category: string) => (
					<CategoryCard key={category} category={category} />
				))}
			</div>
		</section>
	);
};

export default AllCategories;
