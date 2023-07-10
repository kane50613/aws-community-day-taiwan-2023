import type { FC, PropsWithChildren } from "react";

export const WhyReason: FC<
	PropsWithChildren & {
		title: string;
		description: string;
	}
> = ({ title, description, children }) => (
	<div className="flex gap-4 items-center">
		<div
			className="rounded-lg w-24 h-24 grid place-items-center"
			style={{
				background: "linear-gradient(135deg, #404040 0%, #000 100%);",
			}}
		>
			{children}
		</div>
		<div className="flex flex-col gap-2">
			<span className="text-xl">{title}</span>
			<span className="text-lg">{description}</span>
		</div>
	</div>
);
