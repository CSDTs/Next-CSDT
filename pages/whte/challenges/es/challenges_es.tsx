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
			<h1 className="font-light text-4xl mb-4">Retos 1</h1>

			<section className="text-gray-600 ">
				<div className=" py-8 mx-auto">
					<div className="flex flex-col">
						<div className="h-1 bg-gray-200 rounded overflow-hidden">
							<div className="w-24 h-full bg-indigo-500"></div>
						</div>
						<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
							<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
								Retos Algorítmicos
							</h1>
							{/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
								Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone
								intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
							</p> */}
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-2">
								<RatioImage alt="content" source="/whte/cosmogram.jpg" ratio="1" />
							</div>
							<div className="col-span-6">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Cosmograma</h2>
								<p className="text-base leading-relaxed mt-2">
									El símbolo maya que representa al universo es el "cosmograma". La figura del diamante en el centro
									representa al sol.
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/5227/run">
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
								<RatioImage alt="content" source="/whte/quechuandesign.png" ratio="1" />
							</div>
							<div className="col-span-6">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Cruz de 12 Esquinas </h2>
								<p className="text-base leading-relaxed mt-2">
									Esta cruz de 12 esquinas aparece en algunos diseños prehispánicos Incas, aunque no se conoce su
									significado simbólico exacto. Si se supone que la figura blanca es un círculo, este debe verse más
									redondeado a medida que se incrementa el tamaño del diseño. El reto es intentar calcular la colocación
									de las cuentas para una versión de este diseño mayor tamaño.
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2179/run">
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
								<RatioImage alt="content" source="/whte/birds.png" ratio="1" />
							</div>
							<div className="col-span-6">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Guacamayas</h2>
								<p className="text-base leading-relaxed mt-2">
									Estas cuentas azules crean un ángulo muy empinado. Este diseño del pueblo Embera Chamí en Colombia
									muestra las colas de dos guacamayas. ¿Cuál es la pendiente? ¿Cómo se compara esta con la pendiente del
									cosmograma Maya? ¿Por qué podría ser más común el ángulo del cosmograma Maya(desde un punto de vista
									matemático)?
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3 " href="/projects/2752/run">
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
								<br />
								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/5274/run">
									Abrir Aplicación (Versión sin "Loops")
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
								<RatioImage alt="content" source="/whte/emberachami.png" ratio="1" />
							</div>
							<div className="col-span-6">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Triángulos Emberá Chamí</h2>
								<p className="text-base leading-relaxed mt-2">
									Este diseño es del pueblo colombiano Embera Chamí. Se le llama la estrella del creación a la figura
									azul que está en el centro. ¿Cómo podría recrear esta utilizando triángulos? ¿Podría formar esta otras
									figuras? ¿Cómo podría ayudar la iteración a simular estos gradientes (difuminados) de colores y
									sombreado?
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3">
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

			<section className="text-gray-600 ">
				<div className=" py-8 mx-auto">
					<div className="flex flex-col">
						<div className="h-1 bg-gray-200 rounded overflow-hidden">
							<div className="w-24 h-full bg-indigo-500"></div>
						</div>
						<div className="flex flex-wrap flex-row  py-6 mb-2">
							<h1 className=" text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Retos Estadísticos</h1>
							<p className=" leading-relaxed text-base">
								Usted ha sido contratado por el Museo Metropolitano de Arte (abreviado como "Met") en la ciudad de Nueva
								York para determinar la autenticidad de las nuevas adquisiciones de trabajo en cuentas latinoamericano.
								Su trabajo es crear una simulación de una pieza auténtica y original, para después comparar la variación
								de color en la simulación a la variación presente en las piezas nuevamente adquiridas.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-8">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Paso Uno</h2>
								<p className="text-base leading-relaxed mt-2">
									La primera columna de la simulación ha sido completada. El rango de colores de esta columna es
									bastante estrecho (de 0 a 20). Ahora necesitamos agregar dos o tres columnas, al igual que ampliar el
									rango de colores, para hacer un diseño más parecido a la muestra del museo. No olviden guardar su
									trabajo, y anotar el rango de colores que utilizaron.
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2186/run">
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
							<div className="col-span-8">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Segundo Paso</h2>
								<p className="text-base leading-relaxed mt-2">
									Ahora que conocemos el rango de colores, podemos calcular la varianza. Cuando se tiene un conjunto de
									números consecutivos, la media es (mayor + menor)/2. Podemos estimar la varianza para el nuevo rango
									de colores que creamos utilizando la fórmula para estimar la media, en conjunto con el siguiente
									proyecto:
								</p>

								<p className="text-base leading-relaxed mt-2">
									Este programa incluye el cálculo de la suma de cuadrados. Ahora necesitamos agregar un bloque para
									poder calcular la varianza.
								</p>

								<p className="text-base leading-relaxed mt-2">
									Pasos para calcular la varianza de un conjunto de valores numéricos:
								</p>

								<ol className="text-base leading-relaxed mt-2">
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											1
										</span>
										Calcular la media de la muestra (utilizando la fórmula (máximo+mínimo)/2)
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											2
										</span>
										Restar la media a cada elemento del conjunto.
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											3
										</span>
										Elevar cada resultado al cuadrado.
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											4
										</span>
										Encontrar la suma de los valores cuadrados.
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											5
										</span>
										Dividir entre n-1, siendo n el número de elementos del conjunto.
									</li>
								</ol>

								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2187/">
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
