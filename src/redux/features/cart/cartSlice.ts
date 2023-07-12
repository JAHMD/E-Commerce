import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../../components/cart/Cart";

interface InitialStateType {
	cartItems: CartItem[];
	qty: number;
}

const initialState: InitialStateType = {
	cartItems: [],
	qty: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const { id } = action.payload;
			const item = state.cartItems.find((item) => item.id === id);
			if (!item) {
				state.cartItems.push(action.payload);
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const filteredItems = state.cartItems.filter((item) => item.id !== id);
			state.cartItems = filteredItems;
			state.qty--;
		},
		updateQty: (state, action) => {
			state.qty += action.payload;
		},
	},
});

export default cartSlice.reducer;
export const { updateQty, addItem } = cartSlice.actions;
