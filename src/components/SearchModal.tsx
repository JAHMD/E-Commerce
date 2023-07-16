import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ProductType } from "../pages/AllProducts";

type PropsType = {
	setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal = ({ setIsSearchOpen }: PropsType) => {
	const [searcValue, setSearchValue] = useState<string>("");
	const [products, setProducts] = useState<ProductType[]>([]);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("click", (e: MouseEvent) => {
			if (e.target === modalRef.current) {
				setIsSearchOpen(false);
			}
		});

		return () =>
			document.addEventListener("click", (e: MouseEvent) => {
				if (e.target === modalRef.current) {
					setIsSearchOpen(false);
				}
			});
	}, [modalRef, setIsSearchOpen]);

	const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);

		const data = await fetch(
			`https://dummyjson.com/products/search?q=${searcValue}`
		).then((res) => res.json());
		setProducts(data.products);
	};

	return createPortal(
		<div
			ref={modalRef}
			className="fixed left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-6 bg-primary-header/70 p-4"
		>
			<button
				className="h-10 w-10 rounded-full bg-white font-bold text-primary-header"
				onClick={() => setIsSearchOpen(false)}
			>
				<X />
			</button>
			<div className="grid w-[500px] max-w-full gap-6 rounded-md bg-white p-6">
				<form action="">
					<input
						type="search"
						className="w-full rounded-full bg-primary-footer px-5 py-3 outline-transparent"
						placeholder="Search"
						value={searcValue}
						onChange={handleInputChange}
					/>
				</form>
				<ul className="h-60 space-y-4 overflow-y-auto rounded-md bg-primary-footer p-4 text-primary-header">
					{products.length > 0 ? (
						products.map((product) => (
							<li
								key={product.id}
								className="rounded-md bg-white capitalize transition-colors hover:bg-gray-100"
							>
								<Link
									to={`/products/${product.id}`}
									onClick={() => setIsSearchOpen(false)}
									className="flex w-full items-center gap-4 p-4"
								>
									<img
										src={product.thumbnail}
										alt={product.title}
										className="h-10 w-14 rounded-md object-cover bg-blend-lighten"
									/>
									<p className="truncate">{product.title}</p>
								</Link>
							</li>
						))
					) : (
						<p className="flex h-full items-center justify-center text-center text-xl font-semibold capitalize">
							no products
						</p>
					)}
				</ul>
			</div>
		</div>,
		document.body
	);
};

export default SearchModal;
