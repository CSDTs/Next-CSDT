import Image from "next/image";
import AdinkraLayout from "../../layouts/AdinkraLayout";

const SEO = {
	title: "Adinkra Background",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "",
};
export default function AdinkraBackground() {
	return (
		<AdinkraLayout {...SEO}>
			<h1 className="font-light text-4xl mb-4">Adinkra Background</h1>
			<p className="text-lg">
				Adinkra are symbols created by the Ashanti people of Ghana. Traditionally, Adinkra symbols were stamped onto
				cloth, but today they can be found throughout Ghana -- on water bottle labels, chairs, and architecture -- and
				they even appear elsewhere in the world where African people have traveled. Each symbol represents a certain
				belief or proverb, but their shapes also have deep mathematical significance, especially in the ways that they
				use logarithmic curves to represent organic growth. On this site you will learn about the origins of these
				symbols, what they mean, and how to identify the mathematics of Adinkra. You will then learn a simple
				programming language that allows you to simulate traditional Adinkra shapes, and even create your own original
				designs!
			</p>
			<div className="relative my-5 aspect-golden md:w-96">
				<Image
					src="/adinkra/hangingkente1b.jpg"
					className=" my-2 rounded-md  object-cover"
					alt={"Traditional kente cloth draped over"}
					layout="fill"
				/>
			</div>
		</AdinkraLayout>
	);
}
