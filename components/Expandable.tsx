import { ReactNode, useState } from "react";
import cn from "clsx";

function ExpandableItemCoverIcon({ open }: { open?: boolean }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`h-4 w-4 ${open && "rotate-90 -mt-1"}`}
			viewBox="0 0 256 512"
			fill="currentColor"
		>
			<path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
		</svg>
	);
}

export default function Expandable({
	title,
	description,
	defaultOpen = false,
	children,
}: {
	title?: string;
	description?: string;
	defaultOpen?: boolean;
	children?: ReactNode;
}) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<div key={title} role="listitem" className="">
			<button
				onClick={() => setOpen(!open)}
				className={cn(
					"not-prose mt-2 flex flex-row items-center content-center w-full py-1 text-neutral-700",
					"hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-all duration-200",
					open ? "rounded-b-xl" : ""
				)}
				aria-controls={title + "Children"}
				aria-expanded={open}
			>
				<ExpandableItemCoverIcon open={open} />
				<div className="ml-2 leading-tight text-left">
					<p className="m-0">
						{open ? "Hide" : "Show"} {title}
					</p>
					{description ? <p className="m-0">{description}</p> : null}
				</div>
			</button>
			<div
				id={title + "Children"}
				className={cn(
					"mb-4 mx-[6px] px-4 border-l dark:border-neutral-800",
					!open && "hidden"
				)}
			>
				{children}
			</div>
		</div>
	);
}
