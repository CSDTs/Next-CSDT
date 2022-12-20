import MobileSideBar from "./MobileSideBar";
import SideBar from "./SideBar";

export default function Layout({ pages, children }) {
	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
			<section className="pt-6 pb-24 sm:h-full">
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-10">
					<div className="lg:col-span-2">
						<SideBar pages={pages} />
					</div>
					<MobileSideBar pages={pages} />

					<div className="lg:col-span-8">
						<div className="">{children}</div>
					</div>
				</div>
			</section>
		</main>
	);
}
