import { useParams } from "react-router-dom";

const Product = () => {
	const { product } = useParams();

	return <div>Product</div>;
};

export default Product;
