import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../../components/auth/User";

interface InitialStateType {
	user: UserType;
	isLoggedIn: boolean;
}

const initialState: InitialStateType = {
	user: {
		id: "",
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		gender: "",
		image: "",
		token: "",
	},
	isLoggedIn: false,
};

const authSlic = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {
			state.isLoggedIn = true;
		},
		logout: (state) => {
			state.isLoggedIn = false;
		},
		setUserData: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { login, logout, setUserData } = authSlic.actions;
export default authSlic.reducer;
