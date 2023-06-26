import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
	return (
		<>
			<ClerkProvider publishableKey={clerkPubKey}>
				<Navbar />
				<main className="min-h-[calc(100vh-192px-88px)]">
					<Outlet />
				</main>
				<Footer />
			</ClerkProvider>
		</>
	);
}

export default App;
