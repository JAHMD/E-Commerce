import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type PropsType = {
	pagesNumber: number;
	skip: string | null;
};

const Pagination = ({ pagesNumber, skip }: PropsType) => {
	const [index, setIndex] = useState<number>(Number(skip) / 30);
	const pagesLinks = [...new Array(pagesNumber)].map((number, idx) => {
		number = idx + 1;
		return (
			<Link
				to={`/products?skip=${idx * 30}`}
				onClick={() => setIndex(idx)}
				key={number}
				aria-current="page"
				className={`${
					Number(skip) === idx * 30
						? "bg-primary-header text-white hover:bg-primary-header"
						: "text-gray-500 ring-gray-300 hover:bg-gray-50"
				} relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset focus:z-20 focus:outline-offset-0`}
			>
				{number}
			</Link>
		);
	});

	return (
		<div className="mt-10 flex w-full items-center justify-center">
			<nav
				className="isolate inline-flex -space-x-px rounded-md shadow-sm"
				aria-label="Pagination"
			>
				<Link
					to={`/products?skip=${index > 0 ? (index - 1) * 30 : 0}`}
					onClick={() => setIndex(index > 0 ? index - 1 : 0)}
					className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				>
					<span className="sr-only">Previous</span>
					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
				</Link>
				{pagesLinks}
				<Link
					to={`/products?skip=${index < 3 ? (index + 1) * 30 : 3 * 30}`}
					onClick={() => setIndex(index < 3 ? index + 1 : 3)}
					className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				>
					<span className="sr-only">Next</span>
					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
				</Link>
			</nav>
		</div>
	);
};

export default Pagination;
