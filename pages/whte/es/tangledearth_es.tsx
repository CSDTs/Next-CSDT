import { Text } from "../../../components";
import RatioImage from "../../../components/RatioImage";
import WovenHeavenEsLayout from "../../../layouts/WovenHeavenEsLayout";

const SEO = {
	title: "Tierra Enredada",
	description: "La sección anterior explica el concepto de “Cielo Tejido”, ¿pero qué es de la “Tierra Enredada”?",
	canonical: "",
};
export default function TangledEarthEs() {
	return (
		<WovenHeavenEsLayout {...SEO}>
			<h1 className="text-4xl font-medium title-font mb-2 text-gray-900">
				Sistemas de Conocimiento Indígena: Tierra Enredada
			</h1>
			<div className="grid grid-cols-8 gap-5 items-center">
				<div className="col-span-3">
					<RatioImage source="/whte/indiancorn.png" ratio="[2/3]" alt="Diagrama de maíz indio" />
				</div>
				<div className="col-span-5">
					<Text>
						La sección anterior explica el concepto de “Cielo Tejido”, ¿pero qué es de la “Tierra Enredada”? Los dioses
						traviesos, quienes usualmente son representados por animales como el coyote (México) y el conejillo de
						indias, o cuy, (Ecuador), constantemente interrumpen el orden con sorpresas impredecibles. Ellos representan
						la idea que la imprevisibilidad de la vida sólo puede ser sobrevivido por un repertorio de respuestas
						igualmente diverso. La idea pudo haber evolucionado junto con las maneras en las que las poblaciones
						indígenas de las Américas enfatizaban la diversidad de sus cultivos. Si la naturaleza les traía inundaciones
						un año y sequías al siguiente, la única manera de ayudarse ellos mismos a sobrevivir era mediante a la
						diversidad genética de los cultivos.
					</Text>
				</div>
			</div>{" "}
			<Text>
				Cuando llegaron los Europeos, estaban impresionados al encontrarse con tesoro genético: maíz, papa, jitomate,
				pimiento, chile, vainilla, tabaco, frijoles, calabaza, mandioca, aguacate, cacahuate, nuez pacana, marañón
				(anacardo), piña, mora azul, girasol, chocolate, y otras plantas que no conocían anteriormente, de las cuales
				varias habían sido reproducidas por centenas de años para maximizar su variedad. El concepto europeo de un Dios
				único, perfecto y omnipotente pudo haber sido una fuente de inspiración para conceptos útiles como la
				optimización —como encontrar la mejor variedad de avena— pero, a largo plazo, esto minimizó la variedad de
				cultivos.{" "}
			</Text>
		</WovenHeavenEsLayout>
	);
}
