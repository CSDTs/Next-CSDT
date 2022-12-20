import { Text } from "../../../components";
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
			<h1 className="font-light text-4xl ">Materiales para docentes</h1>

			<p className=" text-gray-500 mb-4 ">
				Los materiales de esta sección están hechos para profesores, pero los estudiantes deben sentirse libres de
				explorarlos también.
			</p>

			<h3 className="mt-8 mb-2 text-2xl font-medium text-gray-900 ">Lecturas adicionales: </h3>
			<a
				className="text-indigo-500 inline-flex items-center mt-3"
				href="http://homepages.rpi.edu/~eglash/eglash.dir/nacyb.dir/nacomplx.htm">
				http://homepages.rpi.edu/~eglash/eglash.dir/nacyb.dir/nacomplx.htm
			</a>
			<a
				className="text-indigo-500 inline-flex items-center mt-3"
				href="http://www.famsi.org/research/hopkins/DirectionalPartitions.pdf">
				Direcciones y Particiones en el Mundo Maya Nicholas A. Hopkins y J. Kathryn Josserand Florida State University
				[en inglés]
			</a>

			<h3 className="mt-8 mb-2 text-2xl font-medium text-gray-900 ">Fuentes:</h3>

			<p className="text-base leading-relaxed mt-2 text-gray-900 ">
				Cosmología Mesoamericana como la resume la Dra. Cecilia Kline en su ensayo “Woven Heaven, Tangled Earth.”
				(“Cielo Tejido, Tierra Enredada”) Image © 1981 Henry Klein, con su permiso.
			</p>
			<p className="text-base leading-relaxed mt-2 text-gray-900 ">
				Indigenous buildings typically used rows and columns to create a grid for supporting the roof. Photo from
				Mexicolo.co.uk.
			</p>
			<p className="text-base leading-relaxed mt-2 text-gray-900 ">
				Artesanía con cuentas Huichol en Ciudad de México . Foto por Alejandro Linares Garcia.
			</p>
			<p className="text-base leading-relaxed mt-2 text-gray-900 ">
				Bolsa guatemalteca con cuentas. Imagen cortesía de Sandi Escalle.
			</p>
		</WovenHeavenEsLayout>
	);
}
