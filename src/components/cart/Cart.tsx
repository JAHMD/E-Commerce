export interface CartItem {
	id: number;
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
