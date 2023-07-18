import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { store } from "./redux/store/store";

const queryClient = new QueryClient();

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location]);

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<main className="relative min-h-[calc(100vh-192px-88px)]">
					<Outlet />
				</main>
				<Footer />
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
