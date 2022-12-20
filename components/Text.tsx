import { FC, ReactNode } from "react";

interface TextProps {
	additional?: string;
	children: ReactNode;
}

const Text: FC<TextProps> = ({ additional, children }) => {
	return <p className={`text-lg text-gray-600 leading-relaxed my-4 ${additional}`}>{children}</p>;
};

export default Text;
