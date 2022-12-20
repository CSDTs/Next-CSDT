import Image from "next/image";
import AdinkraLayout from "../../layouts/AdinkraLayout";

const SEO = {
	title: "Adinkra Background",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "",
};
export default function AdinkraTeachingMaterials() {
	return (
		<AdinkraLayout {...SEO}>
			<h1 className="sub">Teaching Materials</h1>
			<p className="subheader">
				The materials in this section are made for teachers, but students should feel free to browse them as well.
			</p>

			<h3>
				<a href="teaching-computational.html">Computational Thinking with Adinkra</a>
			</h3>
			<p>Inside the drawing blocks:</p>
			<ul className="ulmatch">
				<li>
					I have used CSnap to make <a href="/applications/103/run">adinkrahene</a>, but
					<a href="img/circlescriptcomments.jpg">how does the circle block work?</a>
				</li>
				<li>
					I have used CSnap to make <a href="/projects/21311/run">akoma</a>, but
					<a href="./teaching-logspiral.html">how does the log spiral block work?</a>
				</li>
				<li>
					I have used CSnap to make <a href="/projects/21312/run">aban</a>, but
					<a href="img/linescriptcomments.jpg">how does the line block work?</a>
				</li>
			</ul>

			<h3>Supplemental Materials</h3>
			<ul className="ulmatch">
				<li>
					<a href="teaching-evaluation.html">Evaluations of Adinkra Computing in the Classroom</a>
				</li>
				<li>
					<a href="resources/ghanaadinkrabackground.pdf">Adinkra Presentation</a>
				</li>
				<li>
					Can't afford computers for all students?
					<a href="teaching-unplugged.html"> Make physical blocks so they can practice "unplugged"!</a>
				</li>
			</ul>

			<h3>Physical Rendering</h3>

			<ul className="ulmatch">
				<li>
					<a href="teaching-3d.html">Making Adinkra Stamps with a 3D Printer</a>
				</li>
				<li>
					<a href="teaching-foam.html">Making Adinkra Stamps from Foam Cutouts</a>
				</li>
				<li>
					<a href="teaching-pewter.html">Making Adinkra Casts out of Pewter</a>
				</li>
			</ul>

			<h3>Supplies</h3>
			<ul className="ulmatch">
				<li>
					<a href="https://www.culturalstem.com/product/3d-print-n-stamp-materials-kit/">
						Purchase 3D Print 'N Stamp Adinkra Materials Kit from CulturalSTEM
					</a>
				</li>
			</ul>
		</AdinkraLayout>
	);
}
