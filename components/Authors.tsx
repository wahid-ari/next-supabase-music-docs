import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

export default function Authors({
	date,
	children,
}: {
	date?: string;
	children?: ReactNode;
}) {
	return (
		<div className="mt-4 mb-10 text-neutral-500 dark:text-gray-400 text-sm flex flex-wrap items-center gap-x-1 gap-y-2">
			<CalendarDaysIcon className="h-5 w-5" /> {date} by {children}
		</div>
	);
}

export function Author({ name, link }: { name?: string; link?: string }) {
	return (
		<span className="after:content-[','] last:after:content-['']">
			<a
				key={name}
				href={link}
				target="_blank"
				className="ml-1 mr-0.5 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-200"
			>
				{name}
			</a>
		</span>
	);
}
