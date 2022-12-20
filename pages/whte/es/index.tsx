import { Header, SectionHeader, Text } from "../../../components";
import RatioImage from "../../../components/RatioImage";
import UnorderedListArrow from "../../../components/UnorderedListArrow";
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
			<Header>Cielo Tejido, Tierra Enredada</Header>
			<SectionHeader>Introducción</SectionHeader>
			<RatioImage
				source="/whte/wovenheaventangledearth.png"
				alt="La tierra tejida y el inframundo enredado del cosmos mesoamericano"
				size="md:w-5/12"
			/>
			<Text>
				Mucho antes de la llegada de los europeos, los grupos indígenas de América Latina ya habían desarrollado diseños
				tradicionales los cuales incorporaban varios conceptos matemáticos y computacionales. A menudo, estos eran
				concebidos como pertenecientes a dos categorías:
			</Text>
			<div className="grid grid-cols-2 gap-5">
				<div className="col-span-2 md:col-span-1">
					<strong className="mb-2 inline-flex  font-semibold text-gray-800 text-lg italic">
						&quot;Orden desde arriba&quot;
					</strong>

					<ul className="text-gray-600 text-base">
						<li className=" mb-4 flex">
							<UnorderedListArrow />
							<p>
								<span className="text-gray-600 font-semibold ">Simetría con dos ejes</span>: muy similar al sistema de
								coordenadas en el plano Cartesiano, pero también integrando simbología de creencias cosmológicas.
							</p>
						</li>
						<li className=" mb-4 flex">
							<UnorderedListArrow />
							<p>
								<span className="text-gray-600 font-semibold ">Algoritmos</span>: secuencia de instrucciones que crea
								patrones específicos.
							</p>
						</li>
					</ul>
				</div>
				<div className="col-span-2 md:col-span-1">
					<strong className="mb-2 inline-flex font-semibold text-gray-800 text-lg italic">
						&quot;Desorden desde abajo&quot;
					</strong>

					<ul className="text-gray-600 text-base">
						<li className=" mb-4 flex  ">
							<UnorderedListArrow />
							<p>
								<span className="text-gray-600 font-semibold ">Aleatoreidad</span>: visualiza la diversidad y lo
								impredecible de la naturaleza, en contraste con el orden que tienen los patrones predecibles.
							</p>
						</li>
						<li className="mb-4 flex ">
							<UnorderedListArrow />
							<p>
								<span className="text-gray-600 font-semibold ">Caminos Eulerianos</span>: estos diseños comúnmente
								simbolizan la complejidad espacial de los laberintos y las figuras de naturaleza orgánica.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</WovenHeavenEsLayout>
	);
}
