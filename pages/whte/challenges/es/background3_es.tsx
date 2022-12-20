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
			<h1 className="font-light text-4xl mb-4">Antecedentes 3</h1>

			<h2 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Diseños Estadísticos</h2>
			<div className="grid gap-5 grid-cols-8 items-center">
				<RatioImage source="/whte/tangledpaths.png" additional="col-span-2" ratio="1" />
				<div className="col-span-6">
					<p className="text-base leading-relaxed mt-2 text-gray-600">
						Recordemos que el modelo de conocimientos indígenas que presentamos anteriormente consiste de dos partes: el
						orden algorítmico de los cielos, y el enredo estadístico de la Tierra. Muchos de los pueblos indígenas de
						América Latina utilizaban pintura corporal para crear las primeras imágenes de estos patrones enredados. En
						1681, el cirujano británico Lionel Wafer describió la pintura corporal de los indígenas Kuna de Panamá y
						Colombia de la siguiente manera: “Ellos hacen figuras de aves, bestias, hombres, árboles y [otras figuras]
						similares, arriba y abajo de cada parte de su cuerpo, especialmente en el rostro… Las mujeres son las
						pintoras y se deleitan en ello.” Durante la colonización, estas imágenes de ecosistemas enredados se vieron
						movidas a los textiles por medio de las llamadas “molas” (originaria del término del idioma Kuna para el
						plumaje de las aves).
					</p>
					<p className="text-base leading-relaxed mt-2 text-gray-600 ">
						El pueblo Shipibo de Perú, Brasil y Bolivia tiene una historia similar. La razón por la cual sus diseños
						parecen senderos largos y enrollados, es que estos representan a la Anaconda cósmica, que creó el mundo con
						su canto. Igualmente, estas comenzaron en el medio de pintura corporal.
					</p>
				</div>
			</div>
			<div className="grid gap-5 grid-cols-8 items-center">
				<div className="col-span-2">
					<RatioImage source="/whte/labyrinthvase.png" additional="col-span-2" ratio="1" />
					<RatioImage source="/whte/labyrinthface.png" additional="col-span-2" ratio="1" />
				</div>

				<p className="text-base leading-relaxed mt-2 text-gray-600 col-span-6">
					Podemos pensar en estas dos imágenes como si expresaran las interconexiones enredadas tanto de la gente, como
					de la naturaleza. Las culturas jerárquicas como el antiguo Egipto estaban organizadas de arriba hacia abajo,
					por lo que no es extraño que favorecieran la imagen de la pirámide. Sin embargo, los pueblos Kuna y Shipibo
					hacían hincapié en la colaboración y el trueque, así que no es de extrañar que ellos favorecieran imágenes de
					redes y líneas enredadas que representan un modelo de abajo hacia arriba.
				</p>
			</div>
			<div className="grid gap-5 grid-cols-8 items-center">
				<RatioImage source="/whte/tangledpaths2.png" additional="col-span-2" ratio="1" />

				<p className="text-base leading-relaxed mt-2 text-gray-600 col-span-6">
					Una forma de representar estos patrones de una manera matemática es utilizando un modelo estadístico como la
					“caminata al azar”, que se utiliza para casos como el estudio de partículas difundiéndose a través del aire o
					de animales en búsqueda de alimentos. Otra manera de representarla es la “curva que rellena espacio” como el
					fractal Peano que se muestra a la izquierda. Por último, existen modelos para la formación de redes, como la
					“filtración” (“percolación”) del agua en el suelo o el fuego en un bosque.
				</p>
			</div>

			<div className="grid gap-5 grid-cols-8 items-center">
				<RatioImage source="/whte/diversityofnature.jpg" additional="col-span-2" ratio="1" />

				<p className="text-base leading-relaxed mt-2 text-gray-600 col-span-6">
					El legado del diseño estadístico indígena sigue vivo a través de los artistas de hoy en día. Por ejemplo,
					Gonzalo Endara Crow (1936-1996, Bucay, Ecuador) creó diseños que reflejan la diversidad de la naturaleza. Sus
					pinturas a menudo son comparadas con el “realismo mágico” de autores como Gabriel García Márquez.
				</p>
			</div>
		</WovenHeavenEsLayout>
	);
}
