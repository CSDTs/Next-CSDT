import { Text } from "../../../../components";
import RatioImage from "../../../../components/RatioImage";
import WovenHeavenEsLayout from "../../../../layouts/WovenHeavenEsLayout";

const SEO = {
	title: "Retos 1",
	description: "",
	canonical: " ",
};
export default function WHTEBackgroundEs() {
	return (
		<WovenHeavenEsLayout {...SEO}>
			<h1 className="font-light text-4xl mb-4">Retos 2</h1>
			<h2 className=" text-gray-900 font-medium title-font text-2xl mb-2">Retos Algorítmicos</h2>
			<p className="leading-relaxed text-base ">
				Usted encontrará algunos de los mismos patrones que exploramos en perlas ocurren en tejidos, así como nuevos.
				Por ejemplo, aquí hay algunos patrones mayas a continuación. Experimente con la simulación en:
			</p>

			<a className="text-indigo-500 inline-flex items-center my-3" href="/projects/2194/run">
				Abrir Aplicación
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					className="w-4 h-4 ml-2"
					viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</a>

			<p className="leading-relaxed text-base ">
				Para hacer diseños de su propia elección o copias de patrones tradicionales. ¿Puede crear diseños con triángulos
				especiales como 30-60-90? ¿Equilátero? ¿Qué cálculos se necesitan para crear estos en diferentes tamaños?
			</p>

			<div className="flex flex-wrap sm:-m-4 -mx-4">
				<div className="px-4 md:w-full sm:mb-0 my-4 grid grid-cols-8 items-center gap-5">
					<div className="col-span-2">
						<RatioImage alt="content" source="/whte/starofcreation.png" ratio="2" />
					</div>
					<div className="col-span-6">
						<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Estrella de la Creación</h2>

						<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2181/run">
							Abrir Aplicación
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<section className="text-gray-600 mt-10">
				<div className=" py-8 mx-auto">
					<div className="flex flex-col">
						<div className="h-1 bg-gray-200 rounded overflow-hidden">
							<div className="w-24 h-full bg-indigo-500"></div>
						</div>
						<div className="flex flex-wrap flex-row  py-6 mb-2">
							<h2 className=" text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Diseños adicionales</h2>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-2">
								<RatioImage alt="content" source="/whte/cosmogram2.png" ratio="2" />
							</div>
							<div className="col-span-6">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Cosmograma</h2>

								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/5301/run">
									Abrir Aplicación
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-2">
								<RatioImage alt="content" source="/whte/wildturkeys.png" ratio="2" />
							</div>
							<div className="col-span-6">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pavos Salvajes</h2>

								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2251/run">
									Abrir Aplicación
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</WovenHeavenEsLayout>
	);
}
