import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import SideBar from "./SideBar";
export default function MobileSideBar({ pages }) {
	const router = useRouter();
	return (
		<div className="w-full px-2  lg:hidden flex">
			<div className="mx-auto w-full  rounded-2xl bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
								<span>Jump to Section</span>
								<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-blue-500`} />
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
								<SideBar pages={pages} mobile={true} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
