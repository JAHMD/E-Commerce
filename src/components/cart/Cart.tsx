export interface CartItem {
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedPrice: number;
}

const Cart = () => {
	return <div>Cart</div>;
};

export default Cart;
