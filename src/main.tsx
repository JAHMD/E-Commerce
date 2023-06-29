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
import Auth from "./components/auth/Auth.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="all-products" element={<AllProducts />} />
			<Route path="/categories">
				<Route path=":cat" element={<CategoryPage />} />
			</Route>

			<Route path="sign-in" element={<Auth />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
