import type { FC, PropsWithChildren } from "react";

export const WhyReason: FC<
	PropsWithChildren & {
		title: string;
		description: string;
	}
> = ({ title, description, children }) => (
	<div className="flex items-center gap-4">
		<div
			className="grid h-20 w-20 flex-shrink-0 place-items-center rounded-lg"
			style={{
				background: "linear-gradient(135deg, #404040 0%, #000 100%)",
			}}
		>
			{children}
		</div>
		<div className="flex flex-col md:gap-2">
			<span className="text-lg font-medium md:text-xl">{title}</span>
			<span className="text-md">{description}</span>
		</div>
	</div>
);
