import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient();

function App() {
	return (
		<ClerkProvider publishableKey={clerkPubKey}>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<main className="relative min-h-[calc(100vh-192px-88px)]">
					<Outlet />
				</main>
				<Footer />
			</QueryClientProvider>
		</ClerkProvider>
	);
}

export default App;
