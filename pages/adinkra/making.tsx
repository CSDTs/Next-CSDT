import Head from "next/head";
import Image from "next/image";

import { Header, Layout, Navigation, Text } from "../../components/";
import AdinkraLayout from "../../layouts/AdinkraLayout";

import RatioImage from "../../components/RatioImage";
const SEO = {
	title: "Making and Using Adinkra",
	description:
		"Adinkra cloth is produced by dipping stamps into ink, and pressing them against the cloth to create a pattern. The entire process is still done by hand today..",
	canonical: "",
};
export default function AdinkraMakingAndUse() {
	return (
		<AdinkraLayout {...SEO}>
			<h1 className="font-light text-4xl mb-4">Making and Using Adinkra</h1>

			<div className="grid grid-cols-8 items-center gap-5">
				<div className="col-span-8 md:col-span-4 lg:col-span-2">
					<RatioImage source="/adinkra/boakye.png" ratio="[2.5/3]" alt="Gabriel Boakye making Adinkra cloth" />

					<p className="text-gray-500">Gabriel Boakye, Adinkra Artisan</p>
				</div>
				<div className="col-span-8 md:col-span-4 lg:col-span-6">
					<Text>
						Adinkra cloth is one of the traditional cloths of the Asante people. It is often worn to special occasions
						or ceremonies. The colors of the cloth and the symbols it features signify the message that the wearer
						wishes to send to the event&apos;s participants. For example, at a funeral, close family members will often
						wear black cloth that features symbols representing messages to the deceased.
					</Text>
					<Text>
						Adinkra cloth is produced by dipping stamps into ink, and pressing them against the cloth to create a
						pattern. The entire process is still done by hand today: carving their own stamps, making their own ink, and
						stamping the fabric.
					</Text>
				</div>
			</div>

			<h2 className="mt-8 mb-2 font-sans text-3xl font-medium text-left text-gray-900">Making Ink</h2>

			<div className="grid grid-cols-6 gap-5 items-center my-5">
				<Text additional="col-span-6 md:col-span-3 ">
					In this video, Gabriel Boakye (“Bow-ACH-aye”) shows how he uses a machete to separate out only the parts of
					the bark that will yield ink, and get them ready for boiling by pounding in traditional mortar and pestle
					(“waduro and wama”). He said they tried an electric grinder, but the bits were too small to strain out.
				</Text>
				<video
					controls
					className="mb-4 js-player col-span-6 md:col-span-3 md:order-first"
					poster="/adinkra/makingink_poster.png">
					<source src="/adinkra/makingink.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="grid grid-cols-6 gap-5 items-center my-5">
				<Text additional="col-span-6 md:col-span-3 ">
					In this video, you can see the enormous pots of bark simmering in water over the fire. This factory is also
					the Baokye family home. Most of us are used to separating work and home, and struggle when they are not. But
					here you can see how food cooking, laundry, child care and the rest of life can exist in harmony with work
					life. What is the man in the blue shirt doing? Why?
				</Text>
				<video
					controls
					className="mb-4 js-player col-span-6 md:col-span-3  md:order-last"
					poster="/adinkra/makinginkclip_poster.png">
					<source src="/adinkra/making_ink_clip.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>{" "}
			</div>

			<div className="grid grid-cols-3 gap-5 my-5">
				<div className="col-span-3 md:col-span-1">
					<RatioImage source="/adinkra/shavingbark.jpg" alt="" />
					<RatioImage source="/adinkra/bark3.jpg" alt="" />
					<p className="text-gray-500">Shaving the Bark</p>
				</div>

				<div className="col-span-3 md:col-span-1">
					<RatioImage source="/adinkra/poundingbark.jpg" alt="" ratio="[2.3/3]" />
					<p className="text-gray-500">Pounding the Bark</p>
				</div>

				<div className="col-span-3 md:col-span-1">
					<RatioImage source="/adinkra/ink4.jpg" alt="" ratio="[2.3/3]" />
					<p className="text-gray-500">Boiled Ink</p>
				</div>
			</div>

			<Text>
				The ink for Adinkra stamping is made from the bark of the Badie tree (<em>Bridelia ferrungia</em>). First, the
				outside bark is cut away, leaving a red fiber. Next, the red fiber is soaked in water for about 24 hours to make
				it soft. The soaking makes the water lightly colored; at this point it is called &apos;adinkra aduru&apos;
				(&quot;adinkra medicine&quot;). It is traditionally used to treat gastric illness such as dysentery. Scientists
				have confirmed that it has antimicrobial and anti-inflammatory activity.
			</Text>

			<Text>
				The red fiber is then pounded to make it even softer and placed back in the water to be boiled for two days.
				After cooking for two days, the bark is strained out of the water, and can be used to grow mushrooms. In
				traditional culture little is wasted: what comes from nature is returned to nature.
			</Text>
			<Text>
				With the bark removed, the liquid is boiled a final time, reducing it in volume. This final boiling produces a
				thick black ink for stamping.
			</Text>

			<RatioImage source="/adinkra/cycle.jpg" alt="Graph of the cycle from tree bark to ink" ratio="2" />

			<h2 className="mt-8  font-sans text-3xl font-medium text-left text-gray-900">The Importance of Asase Ye Duru</h2>
			<p className="text-gray-500 mb-2">Symbol for the Divinity of Mother Earth</p>
			<div className="grid grid-cols-6 gap-5 items-center">
				<div className="col-span-5">
					<Text>
						In many parts of Ghana, whole forests are destroyed for firewood or to make room for farming. But in areas
						where the Badie tree bark is harvested, the forest is protected. The bark is harvested from the trees in
						ways that keep the tree alive, allowing for regrowth. A single tree yields medicine, income, and
						environmental protection!
					</Text>
					<Text>
						From this, we can see the importance of the Adinkra symbol, "Asase Ye Duru" ("the earth has weight"): it is
						as if humans and nature are put on opposite weighing scales that must be kept in balance.
					</Text>
				</div>
				<div className="col-span-1">
					<RatioImage source="/adinkra/asase_lr.jpg" alt="" ratio="[2.5/3]" />
					<p className="text-gray-500 text-center">Asase Ye Duru</p>
				</div>
			</div>

			<h2 className="mt-8 mb-2 font-sans text-3xl font-medium text-left text-gray-900">Making Stamps</h2>

			<Text>
				Adinkra symbols are carved into a calabash gourd, making stamps for printing on the cloth. Once the stamp is
				carved, it is attached to bamboo sticks for a grip.
			</Text>

			<div className="grid grid-cols-4 gap-5">
				<div className="col-span-4 md:col-span-1">
					<RatioImage source="/adinkra/carving.jpg" alt="" ratio="[2/3]" />
					<p className="text-gray-500 ">Paul Boakye is Carving Stamps from a Calabash</p>
				</div>
				<div className="col-span-4 md:col-span-1">
					<RatioImage source="/adinkra/stamps.jpg" alt="" ratio="[2/3]" />
					<p className="text-gray-500 ">Three Adinkra Stamps</p>
				</div>
				<div className="col-span-4 md:col-span-1">
					<RatioImage source="/adinkra/manystamps.jpg" alt="" ratio="[2/3]" />
					<p className="text-gray-500 ">Display of Many Adinkra Stamps</p>
				</div>
				<div className="col-span-4 md:col-span-1">
					<RatioImage source="/adinkra/bamboo.jpg" alt="" ratio="[2/3]" />
					<p className="text-gray-500 ">Bamboo Sticks Attached as Grip</p>
				</div>
			</div>

			<h2 className="mt-8 mb-2 font-sans text-3xl font-medium text-left text-gray-900">Stamping the Adinkra Cloth</h2>

			<Text>
				When the Adinkra Artisan is ready to stamp the fabric, a strip is laid out across a long table. The stamps are
				then dipped in the ink and pressed down on the cloth. The selection and arrangement of the Adinkra symbols on
				the cloth convey meaning to others.
			</Text>

			<div className="grid grid-cols-6 gap-5">
				<div className="col-span-3">
					<RatioImage source="/adinkra/stamping7.jpg" alt="" ratio="1" />
				</div>
				<div className="col-span-3">
					<RatioImage source="/adinkra/stamping1c.jpg" alt="" ratio="1" />
				</div>
			</div>

			<h2 className="mt-8 mb-2 font-sans text-3xl font-medium text-left text-gray-900">Other Uses of Adinkra</h2>

			<Text>
				In addition to stamped cloth, Adinkra symbols are used for many other purposes. Here are some examples:
			</Text>

			<h3 className="font-bold text-lg">Adinkra in Architecture and Advertising</h3>

			<div className="grid grid-cols-2">
				<div className="grid grid-cols-3 items-center">
					<RatioImage ratio="1" source="/adinkra/dwennimmen.jpg" additional="col-span-1" />
					<RatioImage alt="" source="/adinkra/balcony.jpg" additional="col-span-2" />
					<p className="text-gray-500 col-span-3  text-sm">The Dwennimen symbol fashioned into a Balcony.</p>
				</div>
				<div className="grid grid-cols-3 items-center">
					<RatioImage ratio="1" source="/adinkra/gye_nyame.jpg" additional="col-span-1" />
					<RatioImage alt="" source="/adinkra/gye%20nayme%20resturant.jpg" additional="col-span-2" />
					<p className="text-gray-500 col-span-3  text-sm">The Gye Nyame symbol used as a restaurant name.</p>
				</div>
				<div className="grid grid-cols-3 items-center">
					<RatioImage ratio="1" source="/adinkra/besesaka.jpg" additional="col-span-1" />
					<RatioImage alt="" source="/adinkra/bese%20saka.jpg" additional="col-span-2" />
					<p className="text-gray-500 col-span-3 text-sm">
						Bese saka symbol as ventilation pattern in concrete bricks.
					</p>
				</div>
			</div>

			<h3 className="font-bold text-lg mt-5">Adinkra in Health Communication</h3>

			<Text>
				In 2011, professor Audrey Bennett asked adinkra artisans if they could design a new symbol to help raise
				awareness of A.I.D.S. They began with the international symbol for A.I.D.S. awareness: a folded ribbon.
			</Text>

			<div className="grid grid-cols-8 gap-5 items-center">
				<RatioImage source="/adinkra/helena.jpg" alt="" ratio="[3/4]" additional="md:col-span-3 lg:col-span-2" />

				<div className="md:col-span-4 lg:col-span-6">
					<div className="grid grid-cols-12 items-center gap-5">
						<Text additional=" md:col-span-12 lg:col-span-8 ">
							Paul Boakye carved the ribbon, and then added the traditional symbol for &quot;protection&quot;, which are
							the dots along each side. Gabriel Boakye showed this to other artisans for approval. &quot;One person does
							not make a culture,&quot; he said.
						</Text>{" "}
						<RatioImage source="/adinkra/ribbonbutton.jpg" alt="" ratio="1" additional="md:col-span-4 lg:col-span-2" />
						<RatioImage source="/adinkra/ribbonstamp.jpg" alt="" ratio="1" additional="md:col-span-4 lg:col-span-2" />
					</div>
					<Text>
						After the stamp was approved and applied to cloth, we took the results to the Suntreso Government Hospital
						data manager, Helena Afriyie-Siaw. Here she and Professor Bennett discuss strategies for how this
						traditional communication form might create new opportunities to help raise A.I.D.S. awareness.
					</Text>
				</div>
			</div>
		</AdinkraLayout>
	);
}
