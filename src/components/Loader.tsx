import { Loader } from "lucide-react";

const LoaderComponent = () => {
	return (
		<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
			<Loader className="h-8 w-8 animate-spin text-primary-header" />
		</div>
	);
};

export default LoaderComponent;
