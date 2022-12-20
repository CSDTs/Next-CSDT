import Image from "next/image";
import AdinkraLayout from "../../layouts/AdinkraLayout";

const SEO = {
	title: "Adinkra Background",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "",
};
export default function AdinkraGeometry() {
	return (
		<AdinkraLayout {...SEO}>
			<h1>Traditional Geometry</h1>

			<div className="row mb-3">
				<div className="col-md-5">
					<p>
						Many of the Adinkra symbols incorporate elements of transformational geometry in their design. The following
						pages show adinkra symbols using translation, reflection, dilation, and rotation.
					</p>
					<p>
						Math teachers in Kumasi, Ghana have translated these terms from English into the local language, Twi. Below
						is a table of these translations.
					</p>
				</div>
				<div className="col-md-7">
					<img src="/adinkra/blackboard.jpg" alt="" className="img-fluid rounded" />
				</div>
			</div>

			<div className="table-responsive">
				<table className="table table-borderless">
					<thead>
						<tr>
							<th scope="col">English:</th>
							<th scope="col">Twi:</th>
							<th scope="col">Pronounced&nbsp;Like:</th>
							<th scope="col">Literal Meaning:</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Reflection</td>
							<td>Adane</td>
							<td>"Ah-DAWN-eh"</td>
							<td>Reversed image</td>
						</tr>
						<tr>
							<td>Dilation</td>
							<td>Ketowa/Keseye</td>
							<td>"KET-wah"/"ke-SEE-yah"</td>
							<td>
								Smaller/larger (using both terms helps remind students that dilation can be a size change above or below
								100%)
							</td>
						</tr>
						<tr>
							<td>Rotation</td>
							<td>Ntwaho</td>
							<td>"En-TWA-hoe"</td>
							<td>Spinning (for example a spinning move defines the Ntwaho dance)</td>
						</tr>
						<tr>
							<td>Translation</td>
							<td>Twe</td>
							<td>"TWEE"</td>
							<td>Pulling an object</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2>Reflection in Adinkra Symbols:</h2>

			<div className="row">
				<div className="col-md-9">
					<p>
						In mathematics, an image is said to have reflection when half of the the image appears to mirror across a
						line. For instance, the symbol to the right reflects across the X-axis, the Y-axis, and both diagonal axes.
						On either side of the imaginary lines, the image appears identical but opposite. This symbol is called
						Funtunfunefu Denkyemfunefu, or the Siamese Crocodiles. It represents democracy and unity in diversity based
						on the proverb, "They share one stomach and yet they fight for getting food."
					</p>
					<img src="/adinkra/Reflection.png" alt="" />
				</div>
				<div className="col-md-3 align-self-center">
					<img src="/adinkra/reflection.jpg" alt="" className="figure-img img-fluid rounded" />
					<p className="figure-caption text-center">Funtunfunefu Denkyemfunefu</p>
				</div>
			</div>

			<h2>Translation in Adinkra Symbols:</h2>

			<div className="row">
				<div className="col-md-9">
					<p>
						An image shows translation when it is copied and glides to a new position. We can think of the image to the
						right as having been created by taking one of the circles with a dot inside, and repeatedly copying and
						gliding until there are four. This symbol is called Ntesie - Mate Masie, or "I have heard and kept it." It
						represents knowledge and wisdom based on the proverb, "Deep wisdom comes out of listening and keeping what
						is heard." The script you would need for simulating Ntesie could be created either using the “change x by”
						block or the “translate by width” block. Similar blocks can create vertical translations (“change y by”
						block or the “translate by height”).
					</p>
					<div className="col-md-4 mb-0">
						<img src="/adinkra/change_x_by.png" alt="" className="img-fluid rounded" />
					</div>
					<div className="col-md-6 mt-0">
						<img src="/adinkra/translate_x_by_width.png" alt="" className="img-fluid rounded" />
					</div>
				</div>
				<div className="col-md-3 align-self-center">
					<img src="/adinkra/translation.jpg" alt="" className="figure-img img-fluid rounded" />
					<p className="figure-caption text-center">Ntesie - Mate Masie</p>
				</div>
			</div>

			<h2>Dilation in Adinkra Symbols:</h2>

			<div className="row">
				<div className="col-md-9">
					<p>
						In dilation you change the scale of a shape (like dilating your pupils). By repeating dilation on each copy
						(an "iterative loop"), we get a scaling sequence. In the image to the right, the leaves of the fern create a
						scaling sequence, gradually become smaller as the fern grows upwards.
					</p>
					<p>
						This symbol is called Aya, or the fern. It represents defiance, endurance, and resourcefulness (ferns can
						even grow in rocky cliffs).
					</p>
					<p>We can use the “set pen size to” command to change the size of the line you draw.</p>

					<div className="col-md-4">
						<img src="/adinkra/set_pen_size_to.png" alt="" className="img-fluid rounded" />
					</div>

					<p>
						Then to get the leaf to change size every iteration, you could create a variable called "iteration" to keep
						track. If you were working from the bottom to the top of Aya, you would want the line to be smaller as you
						go, subtracting one from the iteration number each time would make the pen smaller in each iteration.
					</p>
					<div className="col-md-6">
						<img src="/adinkra/set_pen_size_iteration.png" alt="" className="img-fluid rounded" />
					</div>
				</div>
				<div className="col-md-3 align-self-center">
					<img src="/adinkra/dilation.jpg" alt="" className="img-fluid rounded" />
					<p className="figure-caption text-center">Aya</p>
				</div>
			</div>

			<h2>Rotation in Adinkra Symbols:</h2>
			<div className="row">
				<div className="col-md-9">
					<p>
						An image has rotation when it repeats at different angles around one point. For example, in the image to the
						right, one arm of the spiral is copied and rotated about the center point.
					</p>
					<p>This symbol is called Nkontim, or the hair of the Queen's servant. It represents loyalty and service.</p>
				</div>
				<div className="col-md-3 align-self-center">
					<img src="/adinkra/rotation.jpg" alt="" className="img-fluid rounded" />
					<p className="figure-caption text-center">Nkontim</p>
				</div>
			</div>

			<h2>Is There an African Geometry That Is Not Part of Europe's?</h2>
			<div className="row">
				<div className="col-md-10">
					<p>
						One of the fascinating questions we can ask in ethnomathematics: are there some math ideas outside of those
						created in Europe? Consider the adinkra symbol Boa Me Na Me Mmoa Wo, which translates to "Help me and let me
						help you". The upper triangle is missing a square, but has an extra circle. The lower triangle is missing a
						circle, but has an extra square. Each has what the other needs to complete themselves. As a social symbol,
						the meaning is clear: mutual aid. But how do we express that relation in math? At first the word “symmetry”
						comes to mind, but reflection symmetry would require that each side is a mirror image; exactly the same.
						Here they are complements of each other, not reflections.
					</p>
				</div>
				<div className="col-md-2">
					<img src="./resources/symbols/Image_022.png" alt="" className="img-fluid" />
				</div>
			</div>
			<p>
				Let's call this new math property “mutuality”. Perhaps if colonialism never happened, Africans would have
				created a collection of proofs and theorems based on mutuality, just as Europe did for symmetry. We could start
				with a definition: two figures are said to be “mutuals” if their parts can be exchanged to create two completed
				wholes. There are still some details to work out (how do we define “parts”? or “completed”?). But assuming those
				challenges can be solved, it might open up new ways of thinking.
			</p>
			<div className="row">
				<div className="col-md-8">
					<p>
						Can mutuals be in sets of 3 rather than pairs? In higher numbers? Could they be fractional or statistical
						(“figure A is an 82% mutual to figure B”)? What are the real-world applications? For example, when medical
						researchers study molecules, they often describe it as a “lock and key model”. We may know what a particular
						virus looks like, but not the shape of the molecule that can attach to its surface. Perhaps developing new
						forms of math based on “mutuals” could create new opportunities for medical research.
					</p>
				</div>
				<div className="col-md-4 align-self-center">
					<img src="/adinkra/lkmodel.png" alt="" className="img-fluid" />
				</div>
			</div>
		</AdinkraLayout>
	);
}
