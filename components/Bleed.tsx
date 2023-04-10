import { ReactNode } from "react";

export default function Bleed({ children }: { children: ReactNode }) {
	return (
		<div className="bleed relative mt-6 -mx-6 md:-mx-8 2xl:-mx-24">
			{children}
		</div>
	);
}
