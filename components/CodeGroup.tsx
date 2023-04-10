import { ReactNode } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { AnimateSharedLayout, motion } from "framer-motion";

// https://github.com/mattrothenberg/tailwind-fancy-tab
export default function CodeGroup({
	items,
	children,
}: {
	items: string[];
	children: ReactNode;
}) {
	return (
		<Tab.Group as="div" className="req-res my-4">
			<Tab.List className="flex items-center relative bg-blue-100/70 dark:bg-neutral-800/75 rounded-t overflow-auto">
				<AnimateSharedLayout>
					{items.map((item, index) => (
						<Tab
							key={index + 1}
							as="div"
							className="group rounded focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0"
						>
							{({ selected }) => (
								<button
									className={clsx(
										"relative px-4 py-1 my-0.5 mx-0.5 text-[13px] font-medium transition-all duration-200",
										"focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none",
										selected
											? "text-neutral-800 dark:text-neutral-100"
											: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
									)}
								>
									{item}
									{selected && (
										<motion.div
											className="absolute left-0 right-0 z-10 rounded-full h-[2px] bottom-0 border-b-2 border-b-sky-500"
											layoutId="underline"
											initial={false}
										/>
									)}
								</button>
							)}
						</Tab>
					))}
				</AnimateSharedLayout>
			</Tab.List>
			<Tab.Panels className="rounded-b-xl">{children}</Tab.Panels>
		</Tab.Group>
	);
}

CodeGroup.Item = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<Tab.Panel
			className={
				"focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 " +
				className
			}
		>
			{children}
		</Tab.Panel>
	);
};
