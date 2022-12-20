import Head from "next/head";
import Image from "next/image";

import img1 from "../../assets/henna/plants1.png";
import img2 from "../../assets/henna/plants2.png";
import img3 from "../../assets/henna/plants3.png";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";

import pages from "./data";

export default function HennaPlants() {
	return (
		<div>
			<Head>
				<title>From Plants | CSDT</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navigation />
			<Layout pages={pages}>
				<h1 className="font-light text-4xl mb-4">From Plants to Your Skin</h1>
				<p className="text-lg">
					The henna plant grows best in hot dry climates. It is harvested for its leaves, which can be used fresh or
					dried and ground into a powder. When they are ready to create patterns, the ground leaves are combined with
					water and a little lime juice. That paste goes into a paper cone. Then you gently squeeze the cone as you move
					the tip to draw. After two hours you can wash off the paste. The stain is light at first but gets darker in
					about two days. Henna can cause serious allergic reactions in some people. On this website we recommend
					printing the pattern onto tee shirts, laser etching into pendants, or other ways of sharing your creations.
				</p>
				<section className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
					<div className="w-full relative my-5 aspect-1">
						<Image src={img1} className=" my-2 rounded-md  object-cover" alt={""} layout="fill" />
					</div>
					<div className=" w-full relative my-5 aspect-1">
						<Image src={img2} className=" my-2 rounded-md  object-cover" alt={""} layout="fill" />
					</div>
					<div className=" w-full relative my-5 aspect-1">
						<Image src={img3} className=" my-2 rounded-md  object-cover" alt={""} layout="fill" />
					</div>
				</section>
			</Layout>
		</div>
	);
}
