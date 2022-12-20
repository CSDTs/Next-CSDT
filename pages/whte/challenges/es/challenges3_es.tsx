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
			<h1 className="font-light text-4xl mb-4">Retos 3</h1>

			<section className="text-gray-600 ">
				<div className=" py-8 mx-auto">
					<div className="flex flex-col">
						<div className="h-1 bg-gray-200 rounded overflow-hidden">
							<div className="w-24 h-full bg-indigo-500"></div>
						</div>
						<div className="flex flex-wrap flex-row  py-6 mb-2">
							<h1 className=" text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
								Retos de Diseño Estadístico
							</h1>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-8">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Caminata aleatoria de Shipibo</h2>
								<ol className="text-base leading-relaxed mt-2">
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											a
										</span>
										<div>
											<p>
												El trazado de un trazado se realiza con el bloque de &quot;lápiz&quot;. Para explorar las
												posibles direcciones hacia donde podría seguirse el camino, el algoritmo puede &quot;mirar hacia
												adelante&quot;. Podemos hacer esto al memorizar la actual posición en las coordenadas
												&quot;x&quot; y &quot;y&quot;, después levantando el &quot;lápiz&quot; y finalmente avanzando en
												la dirección dada. Si percibe el color que está buscando, sabe que no necesita ir más lejos. Si
												no lo percibe, regresa a la anterior posición en los ejes &quot;x&quot; y &quot;y&quot;, baja el
												&quot;lápiz&quot; y se continúa moviéndose a la nueva posición.
											</p>

											<a className="text-indigo-500 inline-flex items-center my-3" href="/projects/2191/">
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
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											b
										</span>
										Cambiemos el algoritmo de manera que dejemos &quot;rebotar&quot; a la mano en la línea negra
										(cambiando así de dirección).
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											c
										</span>
										<div>
											<span>Ahora estamos listos para simular el siguiente diseño Shipibo:</span>
											<br />
											<a className="text-indigo-500 inline-flex items-center my-3" href="/projects/2192/run">
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
											<span>
												Podemos observar que algunas veces la mano se &quot;atasca&quot;. Para solucionar este problema,
												podemos registrar el número de veces que se &quot;atasca&quot; y utilizar un lugar aleatorio
												para reiniciar tras un número fijo de &quot;atasques&quot;.
											</span>
										</div>
									</li>
								</ol>
							</div>
						</div>
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-8">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Curva fractal Shipibo</h2>
								<p className="text-base leading-relaxed mt-2">
									No todos los diseños complejos son resultado de patrones aleatorios. Los fractales son una forma de
									crear complejidad de una manera determinista. Las curvas fractales pueden crearse mediante la
									sustitución de una línea en manera recursiva, en la que cada línea que compone una figura se sustituye
									por una versión más pequeña de esta misma. Podemos explorar este concepto en la siguiente aplicación:
								</p>

								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/6448/">
									Abrir aplicación Shipibo fractal!
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
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Percolación Kuna</h2>
								<p className="text-base leading-relaxed mt-2">
									La percolación describe el flujo de agua en el suelo, del fuego en un bosque, etc. Podemos decir que
									es una &quot;búsqueda paralela&quot;, porque intenta encontrar muchos caminos diferentes al mismo
									tiempo. Una manera de simular la percolación es tener un registro que guarde las coordenadas de un
									punto anterior y comienze a ramificarse desde allí.
								</p>

								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2188/">
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
						</div>{" "}
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-8">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Simulación de Endara Crow</h2>
								<p className="text-base leading-relaxed mt-2">
									El famoso ladrón del realismo mágico se ha robado las esferas de la pintura de Endara Crow. ¡Ayúdennos
									a recuperarlas!
								</p>

								<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/1892/">
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
						</div>{" "}
						<div className="px-4 md:w-full sm:mb-0 mb-2 grid grid-cols-8 items-center gap-5">
							<div className="col-span-8">
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Histogramas</h2>

								<ol className="text-base leading-relaxed mt-2">
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											a
										</span>
										<div>
											<span>
												Podemos utilizar la aplicación del telar de cuentas para hacer un histograma que compare la
												distribución uniforme y la gaussiana.
											</span>
											<br />
											<span>
												Distribución Unifoame:{" "}
												<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2185/">
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
											</span>
											<br />
											<span>
												Distribución Gaussiana:{" "}
												<a className="text-indigo-500 inline-flex items-center mt-3" href="/projects/2184/">
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
											</span>
										</div>
									</li>
									<li className="text-body-color mb-4 flex text-base">
										<span className="bg-blue-800 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white">
											b
										</span>
										Los &quot;mapas de calor&quot; utilizan colores para indicar valores numéricos (cantidades).
										¿Podemos hacer que el histograma use cuentas de colores como un &quot;mapa de calor&quot;?
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</section>
		</WovenHeavenEsLayout>
	);
}
