import Image from "next/image";
import AdinkraLayout from "../../layouts/AdinkraLayout";

const SEO = {
	title: "Adinkra Background",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "",
};
export default function AdinkraStamping() {
	return (
		<AdinkraLayout {...SEO}>
			<h1>Adinkra Stamping Algorithms</h1>
			<p>
				In a computer, software follows a sequence of steps, called an algorithm. Adinkra stamping also uses an
				algorithm, but the screen is a cloth.
			</p>

			<h2>Traditional Algorithm for Rectangles</h2>
			<p>
				In the traditional algorithm, the adinkra artists first decide which stamps will best tell the story or
				communicate the message of the cloth. Then they come up with a pattern that makes the cloth interesting to look
				at. Suppose you have six stamps and only 5 spaces.
			</p>

			<div className="row">
				<div className="col-lg-4">
					<div className="row">
						<div className="col-9">
							<p className="figure-caption">You use the first five stamps in the first row. You have one remaining:</p>
						</div>
						<div className="col-3 align-self-center">
							<img src="/adinkra/akoko2.jpg" alt="" className="img-fluid rounded" />
						</div>
					</div>
					<img src="/adinkra/stamping-grid-row.png" alt="" className="img-fluid rounded" />
				</div>
				<div className="col-lg-4">
					<div className="row">
						<div className="col-9">
							<p className="figure-caption">
								In the next row, you start with that sixth stamp. Now you have one left over. You can start the third
								row with that one.
							</p>
						</div>
						<div className="col-3 align-self-center">
							<img src="/adinkra/stamping-grid-tile.png" alt="" className="img-fluid rounded" />
						</div>
					</div>
					<img src="/adinkra/stamping-grid-row-2.png" alt="" className="img-fluid rounded" />
				</div>
				<div className="col-lg-4">
					<p className="figure-caption mb-1">
						Keep repeating, and you have the rectangular adinkra algorithm: traditional coding on cloth!
						<a href="/projects/21309/run">Try it here</a>.
					</p>
					<img src="/adinkra/stamping-grid.png" alt="" className="img-fluid rounded" />
				</div>
			</div>
			<video controls width="100%" className="mt-4 js-player" poster="/adinkra/stamping_poster.png">
				<source src="/adinkra/stamping.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<h2>The Polar Coordinate Algorithm</h2>
			<div className="row">
				<div className="col-md-5">
					<img src="/adinkra/kumasi-group.png" alt="" className="img-fluid rounded" />
				</div>
				<div className="col-md-7">
					<p>
						In 2019, Dr. Eglash worked with students in Kumasi, Ghana. They were trying the simulations for Native
						American quilting. They loved the way that Anishinaabe quilters used the medicine wheel to arrange cultural
						images in a circle. They began to import adinkra symbols into the medicine wheel's polar coordinate system.
						A new Adinkra stamping algorithm was born! Check out one of the examples.
					</p>
					<p className="mb-1">
						It is important to remember that just because something is Indigenous does not mean it is always in the
						past. Native Americans call it “Indigenous Futurity”. The African version is “AfroFuturism”. You can try
						creating your own AfroFuturist adinkra stamping pattern by{" "}
						<a href="/applications/104/run">clicking here.</a>
					</p>
				</div>
			</div>
		</AdinkraLayout>
	);
}
