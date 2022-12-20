import { useRouter } from "next/router";

const SideBar = ({ pages, mobile = false }) => {
	const router = useRouter();

	return (
		<>
			<p className="sr-only">Side Navigation</p>
			<ul
				role="list"
				className={`space-y-2 pb-6 text-sm font-medium text-gray-900 w-full  ${
					mobile ? "lg:hidden inline-block" : "hidden lg:inline-block"
				}`}>
				{pages.map((category) => (
					<li key={category.name} className={` w-full hover:text-blue-700 `}>
						<a
							href={category.href}
							className={` px-2 py-2 flex ${router.pathname == category.href ? "bg-blue-100 text-blue-800" : ""}`}>
							{category.name}
						</a>
						{category.subcategories && (
							<ul role="list" className="py-1 px-6 text-sm font-medium text-gray-900 ">
								{router.pathname.includes(category.href) &&
									category.subcategories.map((sub) => (
										<li key={sub.name} className={`hover:text-blue-700  `}>
											<a
												href={sub.href}
												className={` px-2 py-2 flex  ${
													router.pathname == sub.href ? "bg-blue-100 text-blue-800" : ""
												}`}>
												{sub.name}
											</a>
										</li>
									))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</>
	);
};

export default SideBar;
