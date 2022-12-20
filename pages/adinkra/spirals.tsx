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
			<h1>Adinkra Spirals</h1>

			<section>
				<div className="row">
					<div className="col-md-8">
						<p>
							Adinkra symbols show traditional African ideas about geometry. Here we see two kinds of spirals. A coil of
							rope is a linear spiral. The space between each revolution is the same. Ropes are dead, they do not grow.
						</p>
						<p>
							In contrast, the snail's shell is a logarithmic ("log") spiral. As the snail grows, its shell gets larger.
							Log spirals are growing spirals, so that is why they are used by nature. All living things must grow.
						</p>
					</div>

					<div className="col-md-2">
						<img src="/adinkra/linearSpiral.jpg" className="img-fluid rounded" alt="linearSpiral" />
						<p className="figure-caption text-center">Rope coil as a linear spiral</p>
					</div>
					<div className="col-md-2">
						<img src="/adinkra/logSprialSnail.jpg" className="img-fluid rounded" alt="logSprialSnail" />
						<p className="figure-caption text-center">Snail shell as log spiral</p>
					</div>
				</div>
				<p className="text-center">
					The log spiral is the most common shape in Adinkra symbols. Can you guess why? Click below for some hints:
				</p>
				<div id="adinkraIndicators" className="carousel slide mt-3" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#adinkraIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#adinkraIndicators" data-slide-to="1"></li>
						<li data-target="#adinkraIndicators" data-slide-to="2"></li>
						<li data-target="#adinkraIndicators" data-slide-to="3"></li>
						<li data-target="#adinkraIndicators" data-slide-to="4"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-50 mx-auto pb-4" src="/adinkra/dw-slide.png" alt="First slide" />
							<div className="carousel-caption d-sm-block mb-3">
								<h5>Dwennimmen:</h5>
								<p>“It is the heart and not the horns that makes the ram a bully”</p>
							</div>
						</div>
						<div className="carousel-item">
							<img className="d-block w-50 mx-auto pb-4" src="/adinkra/nan-slide.png" alt="Second slide" />
							<div className="carousel-caption d-sm-block mb-3">
								<h5>Akoko Nan:</h5>
								<p>“The hen steps on her chicks but she does not kill them”</p>
							</div>
						</div>
						<div className="carousel-item">
							<img className="d-block w-50 mx-auto pb-4" src="/adinkra/akoben-slide.png" alt="Third slide" />
							<div className="carousel-caption d-sm-block mb-3">
								<h5>Akoben:</h5>
								<p>“The war horn reminds us to always be on the alert”</p>
							</div>
						</div>
						<div className="carousel-item">
							<img className="d-block w-50 mx-auto pb-4" src="/adinkra/sankofa-slide.png" alt="Third slide" />
							<div className="carousel-caption d-sm-block mb-3">
								<h5>Sankofa:</h5>
								<p>“You can always go back”</p>
							</div>
						</div>
						<div className="carousel-item">
							<img className="d-block w-50 mx-auto pb-4" src="/adinkra/nti-slide.png" alt="Third slide" />
							<div className="carousel-caption d-sm-block mb-3">
								<h5>Nyame Nti:</h5>
								<p>"By God's grace, our food grows from the Earth"</p>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#adinkraIndicators" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#adinkraIndicators" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				<h3 id="spirals-answer" className="big-link text-center">
					Click here for the answer...
				</h3>
				<p>
					Animal horns are not the only logarithmic spiral from nature. Many shapes created by living organisms can be
					modeled using a log spiral. Some have several full revolutions, like the snail shell. Others are just a small
					section (arc of a spiral), like the chicken's foot.
				</p>
			</section>

			<section>
				<h2>Comparing the African and European Discovery of Log Spirals</h2>

				<div className="row">
					<div className="col-md-8">
						<p>
							The adinkra symbol Sankofa ("san-KOH-fah") shows a bird looking backwards. It means “You can always go
							back.” It is often a symbol for recovering cultural knowledge lost from colonialism or slavery.
						</p>
						<p>
							The Sankofa symbol comes in two different versions. The first one looks like a natural bird. If we trace
							the outer edge, we see a log spiral. Below we see the abstract version of the same symbol. The bird is
							removed, so only the spiral remains in the abstract version. Note that they added reflection symmetry.
						</p>
						<p>
							Now we know how Ghanaians discovered log spirals: by looking at nature. How did Europeans discover the log
							spiral? In 1637, Rene Descartes wrote a famous letter in which he describes the log spiral. But he
							describes it as “mechanical motion” (think of peeling fruit with a knife, starting from the top). Other
							mathematicians applied the log spirals to mechanical things like springs and ship's anchors. Europeans did
							not apply log spirals to nature until Sir John Leslie wrote Geometry of Curve Lines in 1813, almost 200
							years after Descartes.
						</p>
					</div>
					<div className="col-md-4 align-self-center">
						<div className="row">
							<div className="col-md-6">
								<img src="/adinkra/bird_spirals.png" className="img-fluid rounded" alt="bird" />
								<p className="figure-caption text-center">Sankofa Adinkra</p>
							</div>
							<div className="col-md-6">
								<img src="/adinkra/bird2_spiral.png" className="img-fluid rounded" alt="bird2" />
								<p className="figure-caption text-center">Sankofa With Added Curve</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<img src="/adinkra/sankofa.jpg" className="img-fluid rounded" alt="sankofa1" />
								<p className="figure-caption text-center">Abstract Sankofa</p>
							</div>
							<div className="col-md-6">
								<img src="/adinkra/spiralOnSphere.png" className="img-fluid rounded" alt="bird2" />
								<p className="figure-caption text-center">Descartes' spiral</p>
							</div>
						</div>
					</div>
				</div>
				<p>
					In other words, Africans started with log curves representing nature. Europeans took 200 years to get there.
					Recall the section on making adinkra ink from tree bark: it does not kill the trees, and the bark collectors
					protect the forest. In contrast, the mechanical focus of Europeans created factories that destroyed trees and
					forests. It is not that Africans lacked math and technology. It is that their approach is so different that
					Europeans did not even recognize it as math. It is based on respectful relations with nature and people. The
					Europeans called that “primitive”. It did lack equations, but in other ways it was more advanced.
				</p>
				<p>
					The goal of our website is not to say that one culture's math and science is better than another's. If we do
					that, we just become the mirror image of the colonial approach. Revenge and tit-for-tat never solves problems.
					Rather, we want to encourage a future where Indigenous knowledge and modern science can work hand in hand.
					Innovation needs to be open to contributions from everyone. One name for that approach is “ethnocomputing”. By
					using the simulation tools on this website, you can create your own ethnocomputing investigation.
				</p>
			</section>

			<section>
				<h2 className="sub">Dwennimmen</h2>
				<p className="subheader">Geometry that Reminds Us Not to Bully</p>
				<div className="row">
					<div className="col-md-2">
						<img className="img-fluid rounded" src="/adinkra/ramshorn.jpg" />
						<img className="img-fluid rounded" src="/adinkra/dwennimmenLarge.jpg" />
					</div>
					<div className="col-md-10 align-self-center">
						<p>
							This Adinkra symbol, Dwennimmen ("GEN-ah-men") is a good example. It shows four log spirals. The spirals
							are in pairs because this represents two rams butting heads. Its proverb says: “it is the heart, and not
							the horns, that leads a ram to bully.” In other words, we have to take responsibility for our actions.
							Being a big person does not give you an excuse to push people around. Notice that symbol makes use of the
							log spiral, just like the real ram's horns.
						</p>
						<p>
							<a href="ramshorns.html" id="dwennimen" className="big-link">
								Click to learn more about rams' horns and spirals
							</a>
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2 className="sub" id="gyenyame">
					Gye Nyame
				</h2>
				<p className="subheader">The Curves of Life</p>

				<div className="row pt-0">
					<div className="col-md-9">
						<p className="mt-0">
							Recall that the other adinkra symbols with log spirals were representing shapes of living things:
							Dwennimmen is based on the ram's horn; sankofa on the bird's neck; Akoko nan on the chicken's foot; and
							Akoben on the horn of a bull. But what do the logarithmic curves of the Gye Nyame symbol represent?
						</p>
						<p>
							The knobs down the middle of the symbol represent the knuckles on a fist, a symbol for power. The full
							meaning of the the Gye Nyame symbol is, "No one except God has the power of life." The curves at each end
							are not representing any one particular living shape. Rather, they are a general abstraction for life
							itself. Developing a general abstraction that fits all cases is the fundamental goal of science. Log
							curves are just one example of power laws in biology. Others include fractals and exponential scaling:
							these are still active areas of research. For more about the reason we see power laws in biology,{" "}
							<a href="./biostructures.html">click here</a>.
						</p>
					</div>
					<div className="col-md-3">
						<img className="img-fluid rounded" src="/adinkra/gye_nayme_spirals.png" />
						<p className="mt-0 figure-caption mb-0">Gye Nyame ("jeh N-yah-mee")</p>
						<img className="img-fluid rounded" src="/adinkra/gye_nayme_fist_spirals.png" />
					</div>
				</div>
			</section>

			<section>
				<h2 className="sub" id="tightlycoiled">
					How Tightly Coiled?
				</h2>
				<p className="subheader">Adinkra Makes Use of Different Spiral Shapes</p>
				<p>
					Adinkra carvers speak Twi. They say that some spirals are <em>aboapua awan</em> or “tightly coiled.” Others
					are
					<em>ntitim awan</em> or “loosely coiled”. You will be using the block below to control that variable (“c” for
					“coil”). See if you can change C to match the spiral shape. After you enter the number, click on the blue
					button. (Hint: stay between 0.1 and 2.1)
				</p>

				<div className="row pt-2 pb-2 container--spirals">
					<div className="col-md-3">
						<img src="/adinkra/dwennimmen.jpg" alt="" className="img-fluid d-none d-md-block" />
						<img src="/adinkra/dwennimmen.jpg" alt="" className="img-fluid d-block d-md-none mx-auto w-50" />
						<img src="/adinkra/akoben_spiral.jpg" alt="" className="img-fluid d-none d-md-block" />
						<img src="/adinkra/akoben_spiral.jpg" alt="" className="img-fluid d-block d-md-none mx-auto w-50" />
						<br />
						<button className="btn btn-primary btn-block btn-sm example-1 mb-2 spiralBtn">Create Log Spiral</button>
						<p id="spierr" hidden>
							<strong>Try entering a number between 0.1 and 2.1.</strong>
						</p>
						<div className="input-group">
							<input
								type="number"
								name=""
								id="coilVal"
								value="0.15"
								step="0.01"
								min="0.1"
								max="1"
								className="form-control"
							/>
						</div>
					</div>
					<div className="col-md-8 justify-contents-center">
						<canvas id="adinkraSpiral" width="640" height="640"></canvas>
					</div>
				</div>
			</section>
		</AdinkraLayout>
	);
}
