import Image from "next/image";
import { FC } from "react";

interface ComponentProps {
	source: string;
	alt?: string;
	ratio?: string;
	size?: string;
	additional?: string;
}
const RatioImage: FC<ComponentProps> = ({ source, alt, ratio, size, additional }) => {
	return (
		<div className={`relative my-5 aspect-${ratio || "golden"} ${size} ${additional}`}>
			<Image src={source} className="my-2 rounded-md object-cover" alt={alt ?? ""} layout="fill" />
		</div>
	);
};

export default RatioImage;
