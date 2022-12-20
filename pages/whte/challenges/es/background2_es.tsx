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
			<h1 className="font-light text-4xl mb-4">Antecedentes 2</h1>

			<h2 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Diseños Algorítmicos</h2>

			<div className="grid gap-5 grid-cols-6 items-center">
				<RatioImage source="/whte/correatrasera.png" additional="col-span-2" ratio="1" />

				<p className="text-base leading-relaxed mt-2 text-gray-600 col-span-4">
					Aquí podemos observar a una mujer tejiendo un rebozo de seda en un telar de cintura en el Taller Escuela de
					Rebocería en Santa María del Rio, San Luis Potosí, México. Cuando ella se inclina hacia adelante, los hilos
					que van en dirección vertical se aflojan. Esto le permite girar la tabla plana (“batan”) y así crear un
					espacio donde se pueda mover el carrete (“lanzadera”) en dirección horizontal.
				</p>
			</div>

			<div className="grid gap-5 grid-cols-6 items-center">
				<RatioImage source="/whte/silkrebozo.jpg" additional="col-span-2" ratio="1" />

				<p className="text-base leading-relaxed mt-2 text-gray-600 col-span-4">
					Esto significa que, a diferencia del trabajo con cuentas en el que las cuentas se sitúan en las intersecciones
					del plano Cartesiano, las puntadas del tejido se alternan cada segundo espacio. Podemos decir que están 180
					grados fuera de fase, si pensamos en cada fila como si fuera una onda.
				</p>
			</div>
			<div className="grid gap-5 grid-cols-6 items-center">
				<RatioImage source="/whte/weavingcode_es.PNG" additional="col-span-2" ratio="3" />

				<p className="text-base leading-relaxed mt-2 text-gray-600 col-span-4">
					Podemos recordar que en nuestros algoritmos de trabajo con cuentas, podíamos simplemente “estampar” la imagen
					de la cuenta. Para simular el tejido del telar, tuvimos que hacer un nuevo bloque llamado “shift and stamp”,
					el cual toma en cuenta el desfase de los patrones tejidos.
				</p>
			</div>
		</WovenHeavenEsLayout>
	);
}
