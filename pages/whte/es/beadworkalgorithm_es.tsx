import { Header, Text } from "../../../components";
import RatioImage from "../../../components/RatioImage";
import WovenHeavenEsLayout from "../../../layouts/WovenHeavenEsLayout";

const SEO = {
	title: "Trabajo con Cuentas: Algoritmos",
	description:
		"Debido a la tradición del “Cielo Tejido”, no es sorprendente ver que los diseños coloridos de trabajo en cuentas enfatizan la simetría en dos ejes ortogonales en estas culturas.",
	canonical: " ",
};
export default function WHTEBackgroundEs() {
	return (
		<WovenHeavenEsLayout {...SEO}>
			<Header>Trabajo con Cuentas: Algoritmos</Header>

			<div className="grid gap-5 grid-cols-12 items-center">
				<RatioImage
					source="/whte/quechuandesign.png"
					alt="Un diseño Quechua tradicional"
					additional="col-span-full md:col-span-4"
				/>

				<Text additional="col-span-full md:col-span-8">
					Debido a la tradición del “Cielo Tejido”, no es sorprendente ver que los diseños coloridos de trabajo en
					cuentas enfatizan la simetría en dos ejes ortogonales en estas culturas. A la izquierda, por ejemplo, se
					muestra un diseño Quechua que tiene una estructura Cartesiana con dos ejes de simetría, en el cual cada
					cuadrante tiene un color diferente. En otras palabras, los grupos indígenas de América Latina habían inventado
					el sistema Cartesiano mucho antes de que hubiera nacido René Descartes. No se trata de “matemáticas europeas”
					traídas por el colonialismo, sino de matemáticas indianas que pueden ser fácilmente “traducidas” a un salón de
					clases moderno.
				</Text>
			</div>
			<div className="grid gap-5 grid-cols-12 items-center">
				<RatioImage source="/whte/huichol.png" alt="Abalorios huicholes" additional="col-span-full md:col-span-4" />

				<Text additional="col-span-full md:col-span-8">
					Además del plano Cartesiano, los artesanos (de trabajo de cuentas) indianas desarrollaron su propio concepto
					de los algoritmos: una secuencia de instrucciones que producen patrones de cuentas. A la izquierda, se
					muestran ejemplos de patrones Huicholes de trabajo en cuentas colgados en una tienda en Ciudad de México. El
					software en esta unidad les permitirá experimentar y redescubrir estos algoritmos patrimoniales, al igual que
					inventar patrones y algoritmos propios.
				</Text>
			</div>
		</WovenHeavenEsLayout>
	);
}
