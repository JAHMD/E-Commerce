import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../../components/cart/Cart";

interface InitialStateType {
	cartItems: CartItem[];
}

const initialState: InitialStateType = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
});

export default cartSlice.reducer;
