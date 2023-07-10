import type { FC, PropsWithChildren } from "react";

export const WhyReason: FC<
	PropsWithChildren & {
		title: string;
		description: string;
	}
> = ({ title, description, children }) => (
	<div className="flex gap-4 items-center">
		<div
			className="rounded-lg w-20 h-20 grid place-items-center flex-shrink-0"
			style={{
				background: "linear-gradient(135deg, #404040 0%, #000 100%)",
			}}
		>
			{children}
		</div>
		<div className="flex flex-col md:gap-2">
			<span className="text-lg md:text-xl font-medium">{title}</span>
			<span className="text-md">{description}</span>
		</div>
	</div>
);
