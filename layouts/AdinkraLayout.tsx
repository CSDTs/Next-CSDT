import Head from "next/head";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Layout, Navigation } from "../components/";
import pages from "../pages/adinkra/data";

interface LayoutProps {
	title: string;
	description: string;
	canonical?: string;
	children: ReactNode;
}
const AdinkraLayout: FC<LayoutProps> = ({ title, description, canonical, children }) => {
	return (
		<div>
			<Head>
				<title>{`${title} | CSDT`}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={`https://csdt.org/adinkra/${canonical}`} key="canonical" />
			</Head>

			<Navigation />
			<Layout pages={pages}>{children}</Layout>
		</div>
	);
};

export default AdinkraLayout;
