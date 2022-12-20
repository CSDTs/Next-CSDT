import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Logo from "/assets/logo.svg";
import NSF from "/assets/nsf.gif";
const navigation = [
	{ name: "Projects", href: "#", current: true },
	{ name: "News", href: "#", current: false },
	{ name: "Publications", href: "#", current: false },
	{ name: "News", href: "#", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
	return (
		<Disclosure as="nav" className="bg-zinc-900">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<Image width={30} height={30} className="block h-8 w-auto lg:hidden" src={NSF} alt="Your Company" />
									<Image width={30} height={30} className="block h-8 w-auto lg:hidden" src={Logo} alt="Your Company" />
									<Image width={30} height={30} className="hidden h-8 w-auto lg:block" src={NSF} alt="Your Company" />
									<Image width={30} height={30} className="hidden h-8 w-auto lg:block" src={Logo} alt="Your Company" />
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												className={classNames(
													item.current ? "bg-gray-900 text-white" : "text-gray-300  hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="relative mr-3">
									<div>
										<Menu.Button className="flex rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 items-center text-gray-400">
											<span className="sr-only">Open user menu</span>
											<Image
												width="32"
												height="32"
												className="rounded-full"
												src="https://avatars.dicebear.com/api/identicon/csdt.svg"
												alt=""
											/>
											<span className="px-2 hidden md:flex">CSDT_Developer</span>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95">
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<span className="px-4 text-white font-semibold px flex md:hidden">CSDT_Developer</span>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-400 bg-opacity-10"
														)}>
														My Projects
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-400 bg-opacity-10"
														)}>
														My Classrooms
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-400 bg-opacity-10"
														)}>
														My Workbooks
													</a>
												)}
											</Menu.Item>

											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-400 border-t border-gray-400 bg-opacity-10"
														)}>
														Not you? (LOGOUT)
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>

								<button
									type="button"
									className="rounded-full bg-zinc-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
									<span className="sr-only">View notifications</span>
									<QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
