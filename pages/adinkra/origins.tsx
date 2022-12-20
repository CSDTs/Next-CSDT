import Image from "next/image";

import Text from "../../components/Text";
import AdinkraLayout from "../../layouts/AdinkraLayout";

const SEO = {
	title: "Adinkra Background",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "",
};
export default function AdinkraOrigins() {
	return (
		<AdinkraLayout {...SEO}>
			<h1 className="font-light text-4xl mb-4">Origins</h1>
			<div className="flex items-center flex-col md:flex-row ">
				<div className="md:w-3/4 ">
					<Text>
						Adinkra are symbols from the West African nation of Ghana. Each symbol holds a meaning that represents
						important aspects of their knowledge system. In the “twin crocodile” symbol, for example, both animals share
						a single stomach. This symbol represents the concept that fighting among ourselves for resources is
						pointless: “By feeding you, I feed myself.”
					</Text>
					<Text>
						Cloth stamped with Adinkra symbols can tell a story about which concepts are most important to you. They are
						worn during special occasions or ceremonies.
					</Text>
				</div>
				<div className="relative aspect-1 md:w-1/4 w-full">
					<Image className="max-w-full h-auto" src="/adinkra/crocodiles.jpg" alt="" layout="fill" />
				</div>
			</div>
			<div className="flex gap-6 flex-col md:flex-row">
				<div className="md:w-3/5 ">
					<video controls width="100%" className="mb-4 mx-auto js-player" poster="/adinkra/robe.png">
						<source src="/adinkra/robe.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="relative aspect-[4/3] md:w-2/5 pr-4 pl-4 self-center  w-full ">
					<Image className="rounded" src="/adinkra/hangingkente1.jpg" alt="" layout="fill" />
				</div>
			</div>
			<h2 className="mt-8 mb-2 font-sans text-3xl font-medium text-left text-gray-900">Present Day</h2>
			<div className="flex flex-col md:flex-row gap-5 ">
				<div className="relative  md:w-1/4 w-full aspect-1">
					<Image className=" rounded-sm" src="/adinkra/gate.jpg" alt="" layout="fill" />
				</div>
				<div className="relative md:w-1/4 w-full aspect-1">
					<Image className=" rounded-sm" src="/adinkra/studentworking.jpg" alt="" layout="fill" />
				</div>
				<div className="relative md:w-1/4 w-full aspect-1">
					<Image className=" rounded-sm" src="/adinkra/memorial.jpg" alt="" layout="fill" />
				</div>
				<div className="relative md:w-1/4 w-full aspect-1">
					<Image className=" rounded-sm" src="/adinkra/snug.jpg" alt="" layout="fill" />
				</div>
			</div>
			<Text>
				New innovations have used adinkra to empower communities in many ways. Architects in Ghana have used the shapes
				in buildings, such as the ram&apos;s horn symbol in this balcony. Educators have used them to teach math and
				computing. An adinkra-like symbol, found in an African American burial ground from 1760, inspired the National
				Park Service to use adinkra for its memorial in New York City. And in Albany, NY, the adinkra symbol “knot of
				reconciliation” became the logo for the anti-gun violence group “SNUG,” which buys back guns to keep them off
				the streets.
			</Text>
			{/* <h2 className="mt-0 mb-2 font-sans text-3xl font-medium text-left text-gray-900">
				Where Did Adinkra Geometric Forms Come From?
			</h2> */}
			<h2 className="title-font font-semibold text-gray-800 tracking-wider text-2xl mb-3">
				Where Did Adinkra Geometric Forms Come From?
			</h2>
			<Text>
				Like all cultures, the Ashanti developed their math ideas from both natural and social influences. Below you can
				see 3 stages:
			</Text>
			<ul>
				<li className="text-body-color mb-4 flex text-base">
					<span className="text-primary mr-2 flex items-center rounded-full text-base">
						<svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
							<path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
						</svg>
					</span>
					Observing an object from nature or culture.
				</li>
				<li className="text-body-color mb-4 flex text-base">
					<span className="text-primary mr-2 flex items-center rounded-full text-base">
						<svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
							<path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
						</svg>
					</span>
					Artistically representing this object.
				</li>
				<li className="text-body-color mb-4 flex text-base">
					<span className="text-primary mr-2 flex items-center rounded-full text-base">
						<svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
							<path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
						</svg>
					</span>
					Abstracting the art into geometric forms. This makes the stamps easier to reproduce, and the symbols easier to
					recognize. And it helps us see why African mathematical traditions were slightly different from those of
					Europe: there is more emphasis on iteration and logarithmic curves.
				</li>
			</ul>
			{/* <h3 className=" font-medium text-gray-700 tracking-tight text-2xl mb-3 leading-3">From Nature</h3> */}
			<h3 className="mt-10 mb-3 font-semibold text-xl ">From Nature</h3>
			<div className="flex md:flex-row flex-col gap-5">
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-semibold text-gray-800 text-lg">Original Object</strong>
					<div className="relative aspect-1 w-full ">
						<Image src="/adinkra/waterdrop2.png" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Water Drop</p>
				</div>
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Artistic Representation</strong>
					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/soulwasher.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Soul Washer&apos;s Badge</p>
				</div>
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Adinkra Symbol</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/adinkraheneOrigins.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Adinkrahene Symbol</p>
				</div>
			</div>
			<h4 className="text-base font-semibold mt-5">Description</h4>
			<Text>
				Photos of water ripples are often used to study fluid physics. Ghanaian artisans were also keen observers of
				fluid shapes. We can identify a ripple pattern in the gold &quot;Soul Washer&apos;s&quot; badge - worn by the
				Ghana priests who conducted the king&apos;s water rituals. This suggests an origin for the adinkrahene
				(&quot;king of adinkra&quot;) symbol: ripples of power spread in all directions.
			</Text>
			<a
				href="/applications/103/run"
				className="  inline-flex items-center justify-center rounded-full py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90 bg-blue-600">
				Click to Launch Simulation
			</a>
			<h3 className=" mb-3 font-semibold text-xl mt-10">From Architecture</h3>
			<div className="flex md:flex-row flex-col gap-5">
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Original Object</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/temple2.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Temple</p>
				</div>
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Artistic Representation</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/door.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Temple Door</p>
				</div>
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Adinkra Symbol</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/church.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">&quot;Church&quot; Symbol</p>
				</div>
			</div>
			<h4 className="text-base font-semibold mt-5">Description</h4>
			<Text>
				Traditional temple layouts in Ghana often use an open courtyard surrounded by roofed verandas. The few that
				remain today have wood inlays in the doors that appear to show this spirital power spreading like the
				adinkrahene symbol. The adinkra symbol at far right has been identified today to mean &quot;church&quot;, yet it
				seems likely that it originally referred to the connection of spiritual forces to the traditional temples.
			</Text>{" "}
			<a
				href="/projects/21304/run"
				className="  inline-flex items-center justify-center rounded-full py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90 bg-blue-600">
				Click to Launch Simulation
			</a>
			<h3 className=" mb-3 font-semibold text-xl mt-10">From Animals</h3>
			<div className="flex md:flex-row flex-col gap-5">
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Original Object</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/swanOrigins.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Bird</p>
				</div>
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Artistic Representation</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/bird.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Artistic Sankofa Symbol</p>
				</div>
				<div className="md:w-1/3 w-full">
					<strong className="mb-0 font-bold text-gray-800 text-lg">Adinkra Symbol</strong>

					<div className="relative aspect-1 w-full">
						<Image src="/adinkra/sankofa.jpg" alt="" className="rounded-sm" layout="fill" />
					</div>
					<p className="mt-0 text-gray-500 text-lg">Abstract Sankofa Symbol</p>
				</div>
			</div>
			<h4 className="text-base font-semibold mt-5">Description</h4>
			<Text>
				Many shapes created by living organisms can be modeled by using the arc of a log spiral. Some shapes have
				several full rotations (like a snail shell), while others are just a short arc (like the neck of a bird).
				Adinkra symbols often use log spiral arcs due to an important feature of biological growth, as we will see in
				later sections.
			</Text>{" "}
			<a
				href="/projects/21305/run"
				className="  inline-flex items-center justify-center rounded-full py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90 bg-blue-600">
				Click to Launch Simulation
			</a>
			<h2 className="mt-8  mb-2 font-sans text-3xl font-medium text-left text-gray-900">Symbols &amp; Meanings</h2>
			<Text>
				Each symbol has a name in Twi, the language of the Ashanti people. This name translates to a literal meaning and
				a symbolic meaning. Below are some adinkra and their corresponding information, such as their symbolic meaning
				and the proverbs on which they are based.
			</Text>
			<div className="flex flex-wrap ">
				<div className="md:w-1/3 pr-4 pl-4 self-center my-5">
					<div className="relative aspect-1 w-9/12 mx-auto mb-5">
						<Image src="/adinkra/gye_nyame.jpg" alt="" layout="fill" />
					</div>
					<p className="font-bold">Twi Name:</p>
					<p>Gye Nyame (&quot;jeh N-yah-mee&quot;)</p>
					<p className="font-bold">Literal Translation:</p>
					<p>&quot;Except for God&quot;</p>
					<p className="font-bold">Symbolic Meaning:</p>
					<em>Supremacy of God</em>
					<p className="font-bold">Proverb:</p>
					<p>Only God has the power of life.</p>
				</div>
				<div className="md:w-1/3 pr-4 pl-4 my-5">
					<div className="relative aspect-1 w-9/12 mx-auto mb-5">
						<Image src="/adinkra/akoko2.jpg" alt="" layout="fill" />
					</div>
					<p className="font-bold">Twi Name:</p>
					<p>Akoko Nan (&quot;ah-ko-ko non&quot;)</p>
					<p className="font-bold">Literal Translation:</p>
					<p>&quot;The Leg of a Hen&quot;</p>
					<p className="font-bold">Symbolic Meaning:</p>
					<em>Mercy, Nurturing</em>
					<p className="font-bold">Proverb:</p>
					<p>The hen treads upon its chicks, but it does not intend to kill them.</p>
				</div>
				<div className="md:w-1/3 pr-4 pl-4 my-5">
					<div className="relative aspect-1 w-9/12 mx-auto mb-5">
						<Image src="/adinkra/sankofa.jpg" alt="" layout="fill" />
					</div>
					<p className="font-bold">Twi Name:</p>
					<p>Sankofa (&quot;sang-ko-fah&quot;)</p>
					<p className="font-bold">Literal Translation:</p>
					<p>&quot;Return and Get It&quot;</p>
					<p className="font-bold">Symbolic Meaning:</p>
					<em>Learn from the Past </em>
					<p className="font-bold">Proverb:</p>
					<p>It is not taboo to return to fetch something you forgot earlier on.</p>
				</div>
			</div>
			<div className="flex flex-wrap ">
				<div className="md:w-1/3 pr-4 pl-4 my-5">
					<div className="relative aspect-1 w-9/12 mx-auto mb-5">
						<Image src="/adinkra/dwennimmen.jpg" alt="" layout="fill" />
					</div>
					<p className="font-bold">Twi Name:</p>
					<p>Dwennimmen (&quot;djwin-knee-mann&quot;)</p>
					<p className="font-bold">Literal Translation:</p>
					<p>&quot;Ram&apos;s Horns&quot;</p>
					<p className="font-bold">Symbolic Meaning:</p>
					<em>Humility and Strength </em>
					<p className="font-bold">Proverb:</p>
					<p>It is the heart and not the horns that leads a ram to bully.</p>
				</div>

				<div className=" md:w-1/3 pr-4 pl-4 my-5">
					<div className="relative aspect-1 w-9/12 mx-auto mb-5">
						<Image src="/adinkra/adinkrahene.jpg" alt="" layout="fill" />
					</div>
					<p className="font-bold">Twi Name:</p>
					<p>Adinkrahene (&quot;a-dink-kra-hen-knee&quot;)</p>
					<p className="font-bold">Literal Translation:</p>
					<p>&quot;Chief of the Adinkra Symbols&quot;</p>
					<p className="font-bold">Symbolic Meaning:</p>
					<em>Greatness, leadership </em>
					<p className="font-bold">Proverb:</p>
					<p>
						This symbol is said to have inspired the creation of the other symbols. &quot;Hene&quot; is the Twi word for
						&quot;king&quot; or &quot;leader&quot;.
					</p>
				</div>
				<div className="md:w-1/3 pr-4 pl-4 my-5">
					<div className="relative aspect-1 w-9/12 mx-auto mb-5">
						<Image src="/adinkra/pempansie.jpg" alt="" layout="fill" />
					</div>
					<p className="font-bold">Twi Name:</p>
					<p>Pempamsie (&quot;pim-pam-see-ah&quot;)</p>
					<p className="font-bold">Literal Translation:</p>
					<p>&quot;Sew in readiness&quot;</p>
					<p className="font-bold">Symbolic Meaning:</p>
					<em>Steadfast; prepared </em>
					<p className="font-bold">Proverb:</p>
					<p>The links of a chain symbolize both the strength of unity and importance of preparation.</p>
				</div>
			</div>
			<a role="button" className="font-medium text-blue-600 hover:text-blue-500 block mt-10" href="./symbols.html">
				Click here to see all the Adinkra Symbols
				<span aria-hidden="true"> &rarr;</span>
			</a>
		</AdinkraLayout>
	);
}
