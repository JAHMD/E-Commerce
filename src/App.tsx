import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<main className="relative min-h-[calc(100vh-192px-88px)]">
				<Outlet />
			</main>
			<Footer />
		</QueryClientProvider>
	);
}

export default App;
