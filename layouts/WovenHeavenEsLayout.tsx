import Head from "next/head";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Layout, Navigation } from "../components";
import pages from "../pages/whte/es/data";

interface LayoutProps {
	title: string;
	description: string;
	canonical?: string;
	children: ReactNode;
}
const WovenHeavenEsLayout: FC<LayoutProps> = ({ title, description, canonical, children }) => {
	return (
		<div>
			<Head>
				<title>{`${title} | CSDT`}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={`https://csdt.org/whte/${canonical}`} key="canonical" />
			</Head>

			<Navigation />
			<Layout pages={pages}>{children}</Layout>
		</div>
	);
};

export default WovenHeavenEsLayout;
