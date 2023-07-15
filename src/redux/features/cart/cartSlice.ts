import { createSlice } from "@reduxjs/toolkit";

export interface CartItemType {
	id: string | number;
	title: string;
	price: number;
	quantity: number;
	discountPercentage: number;
	thumbnail: string;
	total?: number;
}

interface InitialStateType {
	cartItems: CartItemType[];
	qty: number;
	totalPrice: number;
}

interface ActionType {
	payload: CartItemType;
	type: string;
}

const initialState: InitialStateType = {
	cartItems: [],
	qty: 0,
	totalPrice: 0,
};

const updateTotals = (state: InitialStateType) => {
	const items = state.cartItems;
	state.qty = items.reduce((acc, item) => acc + item.quantity, 0);
	state.totalPrice = items.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: ActionType) => {
			const addedItem: CartItemType = action.payload;
			const foundItem = state.cartItems.find(
				(item) => item.id === addedItem.id
			) as CartItemType;
			if (!foundItem) {
				state.cartItems.push(addedItem);
			}
			updateTotals(state);
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const filteredItems = state.cartItems.filter((item) => item.id !== id);
			state.cartItems = filteredItems;
		},
		updateItemQty: (state, action) => {
			const { id, qty } = action.payload;
			const cartItem = state.cartItems.find(
				(item) => item.id === id
			) as CartItemType;
			if (cartItem.quantity > 0) {
				cartItem.quantity += qty;
			}
			if (cartItem.quantity === 0) {
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
			}
			updateTotals(state);
		},
		setUserCart: (state, action) => {
			const items = action.payload;
			state.cartItems = items;
			updateTotals(state);
		},
	},
});

export default cartSlice.reducer;
export const { addItem, updateItemQty, setUserCart } = cartSlice.actions;
