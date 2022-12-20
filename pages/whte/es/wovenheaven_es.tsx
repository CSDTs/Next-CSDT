import { Header, Text } from "../../../components";
import RatioImage from "../../../components/RatioImage";
import WovenHeavenEsLayout from "../../../layouts/WovenHeavenEsLayout";

const SEO = {
	title: "Cielo Tejido",
	description:
		"Learn about the origins of these symbols, what they mean, and how to identify the mathematics of Adinkra.",
	canonical: "Orden desde arriba y desorden desde abajo. ",
};
export default function WovenHeavenEs() {
	return (
		<WovenHeavenEsLayout {...SEO}>
			<Header>Sistemas de Conocimiento Indígena: Cielo Tejido</Header>

			<div className="grid grid-cols-10 gap-5 items-center">
				<div className="col-span-10 md:col-span-3">
					<RatioImage
						source="/whte/wovenheaventangledearth.png"
						alt="La tierra tejida y el inframundo enredado del cosmos mesoamericano"
					/>
				</div>
				<div className="col-span-10 md:col-span-7">
					<Text>
						La Profesora Cecilia Kline de Universidad de California, Los Ángeles (UCLA, por sus siglas en inglés) ha
						resumido la visión que tenían grupos prehispánicos Mesoamericanos, como los Mayas y los Aztecas, como “Cielo
						Tejido, Tierra Enredada” (“Woven Heaven, Tangled Earth” en Inglés). En esta cosmología, los “altos dioses” y
						sus seguidores humanos imponen un orden sobre el mundo, el cual es simbolizado por las filas y columnas del
						telar. Mientras tanto, los dioses inferiores, como los “traviesos”, crean el enredo al cual hoy en día
						llamamos ecosistemas y adaptación evolutiva.{" "}
					</Text>
				</div>
				<div className="col-span-10 md:col-span-3">
					<RatioImage source="/whte/indigenousbuilding.png" alt="Casa tradicional indígena" />
				</div>
				<div className="col-span-10 md:col-span-7">
					<Text>
						La representación del “orden desde arriba” como una simetría con dos ejes con frecuencia aparece en otros
						conceptos Latinoamericanos. Por ejemplo, en el idioma Maya, para expresar los conceptos de “cielo” y
						“cuatro” se utiliza la misma pronunciación (“chan”). Se puede encontrar un un arreglo Cartesiano similar en
						la construcción de las viviendas tradicionales indígenas, las cuales cuentan con un techo “tejido”. Existen
						otros artefactos tradicionales que cuentan con esta estructura, como los tapetes para dormir, las trampas
						para pescar, las canastas y, con mayor importancia, el telar que utilizaban para crear textiles tejidos.
					</Text>
				</div>
			</div>

			<Text>
				Los arqueólogos que estudian este tema han mostrado varias maneras en las culturas Mesoamericanas prehispánicas
				utilizan su sistema de dos ejes para organizar el mundo. Por ejemplo, cada punto cardinal estaba asociado con un
				tipo de movimiento: el sentido Norte-Sur para volar y nadar, y Este-Oeste para caminar y gatear.
			</Text>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
				<RatioImage source="/whte/calendar.png" alt="Versión en piedra del calendario maya" ratio="1" />

				<RatioImage source="/whte/tenochtitlan.png" alt="Un mapa de Tenochtitlán" ratio="1" />

				<RatioImage source="/whte/northsoutheastwest.png" alt="Sistema de cuadrantes" ratio="1" />

				<RatioImage source="/whte/obsidian.png" alt="Pedazo de obsidiana" ratio="1" />
			</div>
			<Text>
				Algunos de sus sistemas de calendario estaban organizados por cuadrantes: por ejemplo, uno de los sistemas Mayas
				constaba de 9.1 años, organizado por cuadrantes de 819 días cada uno.{" "}
			</Text>

			<Text>
				Muchas ciudades antiguas de América Latina estaban divididas en cuadrantes, como Tiwanaku en Bolivia y Cusco en
				Perú. Este mapa de Tenochtitlán que muestra los ejes del templo de la Luna y el templo del Sol fue dibujado en
				1524. John Dee, un matemático Británico obsesionado con los reportes del Nuevo Mundo (inclusive tenía un espejo
				de obsidiana de origen Azteca), dibujó una “cruz de graduación” en uno de sus libros en 1570. Mientras tanto,
				René Descartes creó el sistema Cartesiano de dos ejes en 1673. ¿Podría ser que la historia del sistema de
				coordenadas Cartesianas pueda correr desde Tenochtitlán, hasta Dee y, por último, Descartes? ¿Qué piensan
				ustedes?
			</Text>
		</WovenHeavenEsLayout>
	);
}
