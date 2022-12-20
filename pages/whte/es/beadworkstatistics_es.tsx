import { Header, Text } from "../../../components";
import RatioImage from "../../../components/RatioImage";
import WovenHeavenEsLayout from "../../../layouts/WovenHeavenEsLayout";

const SEO = {
	title: "WHTE Introducción",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "Orden desde arriba y desorden desde abajo. ",
};
export default function WHTEBackgroundEs() {
	return (
		<WovenHeavenEsLayout {...SEO}>
			<Header>Trabajo con Cuentas: Estadística</Header>

			<div className="grid gap-5 grid-cols-8 items-center">
				<RatioImage source="/whte/labyrinthvase.png" additional="col-span-full md:col-span-2" ratio="1" />

				<RatioImage source="/whte/labyrinthface.png" additional="col-span-full md:col-span-2" ratio="1" />

				<Text additional="col-span-full md:col-span-4">
					Justo como el orden del cielo se ve reflejado en imágenes tales como los diseños Cartesianos del telar de
					cuentas, en ocasiones, el enredo de la vida en la tierra es representado visualmente al utilizar diseños
					aleatorios o no lineales. Se pueden observar un laberintos de figuras que se ramifican de manera impredecible
					en los túneles debajo de los templos Mayas, en historias como El Laberinto de la Soledad de Octavio Paz y en
					diseños visuales como la cerámica, pintura facial y molas de Sudamérica.
				</Text>
			</div>
			<div className="grid gap-5 grid-cols-8 items-center">
				<RatioImage source="/whte/mayanlabyrinth.png" ratio="3" additional="col-span-full md:col-span-6" />
				<RatioImage source="/whte/guatemalanpurse.png" additional="col-span-full md:col-span-2" ratio="1" />
			</div>
			<Text>
				Estos “diseños estadísticos” aparecen algunas veces en el trabajo con cuentas, aunque son menos comunes que los
				diseños geométricos. En el diseño Maya que está a la izquierda, se muestran figuras que se ramifican como
				laberintos, que además tienen una variación de colores aleatoria. En el ejemplo anterior, la variación es sutil
				— de azul obscuro a azul claro — pero los artistas pueden controlar el rango de variación de acuerdo al gusto
				propio o el de sus clientes, como se muestra en esta bolsa de cuentas Maya.
			</Text>
		</WovenHeavenEsLayout>
	);
}
