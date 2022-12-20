import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface SoftwareProps {
	source: StaticImageData;
	link: string;
	name: string;
	tagline?: string;
}
const SoftwareCard: FC<SoftwareProps> = ({ source, link, name, tagline }) => {
	return (
		<a className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 cursor-pointer " href={link}>
			<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 ">
				<figure className="mb-2">
					<Image src={source} alt="" className="h-64 ml-auto mr-auto w-full object-cover" />
				</figure>
				<div className="rounded-lg p-4 bg-blue-800 flex flex-col ">
					<h5 className="text-white text-2xl font-bold leading-none">{name}</h5>
					{tagline && <span className="text-xs text-gray-400 leading-none ">{tagline}</span>}
				</div>
			</div>
		</a>
	);
};
export default SoftwareCard;
