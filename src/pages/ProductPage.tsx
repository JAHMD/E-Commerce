import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "../components/Loader";
import { addItem } from "../redux/features/cart/cartSlice";
import { RootState } from "../redux/store/store";
import { ProductType } from "./AllProducts";

const PRODUCT_URL = "https://dummyjson.com/products";

const ProductPage = () => {
	const { id } = useParams<string>();
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const isCartItem = cartItems.find((cartItem) => cartItem.id === Number(id));

	const dispatch = useDispatch();

	const { isLoading, error, data } = useQuery({
		queryKey: [`product-${id}`],
		queryFn: (): Promise<ProductType> =>
			fetch(`${PRODUCT_URL}/${id}`).then((res) => res.json()),
	});

	const [qty, setQty] = useState<number>(1);
	const [disImg, setDisImg] = useState<string | undefined>("");

	const bottomImgElements = data?.images.map((img) => (
		<li className="w-20" key={img}>
			<img
				src={img}
				alt={`${data?.title} image`}
				className="cursor-pointer mix-blend-darken"
				onClick={handleImgChange}
			/>
		</li>
	));

	const disPrice = new Intl.NumberFormat("en-UA", {
		style: "currency",
		currency: "USD",
	}).format(data?.price || 0);

	useEffect(() => {
		setDisImg(data?.thumbnail);
	}, [data]);

	function handleQtyChange(e: ChangeEvent<HTMLInputElement>) {
		setQty(e.target.valueAsNumber);
	}

	function handleImgChange(e: MouseEvent<HTMLImageElement>) {
		setDisImg(e.currentTarget.src);
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(addItem({ ...(data as ProductType), quantity: qty }));
	}

	if (isLoading) {
		return <LoaderComponent />;
	}

	if (error instanceof Error) {
		return <p>An error has occurred: {error.message}</p>;
	}

	return (
		<section className="container">
			<div className="item-center flex flex-wrap justify-between gap-4">
				<Link to=".." className="link">
					All products
				</Link>
				<Link to="/categories" className="link">
					All categories
				</Link>
			</div>
			<div className="mt-8 flex flex-col justify-center gap-10 md:flex-row">
				<div>
					<img
						src={disImg}
						alt={`${data?.title} image`}
						className="h-[500px] w-full rounded-lg object-contain"
					/>
					<ul className="mt-8 flex items-center justify-between gap-4 bg-primary-footer p-4">
						{bottomImgElements}
					</ul>
				</div>
				<div className="w-[500px] max-w-full space-y-6">
					<div>
						<h1 className="text-2xl font-bold capitalize text-primary-header">
							{data?.title}
						</h1>
						<p className="">{data?.brand}</p>
						<p className="pt-2 text-slate-600">{disPrice}</p>
					</div>
					<form
						action=""
						className="flex flex-col gap-4"
						onSubmit={handleSubmit}
					>
						<label
							htmlFor="qty"
							className="font-semibold text-primary-main-headdings"
						>
							Quantity
						</label>
						<input
							type="number"
							id="qty"
							value={qty}
							onChange={handleQtyChange}
							className="rounded-md bg-primary-footer px-4 py-2 text-primary-text"
							min={1}
						/>
						<button
							className="btn btn-primary disabled:cursor-not-allowed disabled:bg-slate-700"
							disabled={!!isCartItem}
						>
							{isCartItem ? "In cart" : "Add to cart"}
						</button>
					</form>
					<p className="text-primary-header">{data?.description}</p>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
