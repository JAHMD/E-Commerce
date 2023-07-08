import { Image } from "lucide-react";

type Props = {
	isImageLoading: boolean;
};

const ImageLoader = ({ isImageLoading }: Props) => {
	return (
		<div
			className={`absolute left-0 top-0 z-10 flex h-full w-full animate-pulse items-center justify-center bg-slate-200 ${
				isImageLoading ? "block" : "hidden"
			}`}
		>
			<Image className="h-1/2 w-1/2 text-slate-300" />
		</div>
	);
};

export default ImageLoader;
