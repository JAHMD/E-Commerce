import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

// pages
import SignIn from "./components/auth/SignIn.tsx";
import User from "./components/auth/User.tsx";
import AllCategories from "./pages/AllCategories.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="products">
				<Route index element={<AllProducts />} />
			</Route>

			<Route path="categories">
				<Route index element={<AllCategories />} />
				<Route path=":cat" element={<CategoryPage />} />
			</Route>
			<Route path="sign-in" element={<SignIn />} />
			<Route path="user" element={<User />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
