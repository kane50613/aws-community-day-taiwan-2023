import type { ButtonHTMLAttributes, FC } from "react";

export const CTAButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	...props
}) => (
	<button
		style={{
			background: "linear-gradient(45deg, #FFA857 0%, #FFDB59 100%)",
			boxShadow: "0px 4px 12px 4px rgba(255, 186, 83, 0.25)",
		}}
		className="gap-3 py-2 px-6 rounded-md text-sm md:text-md w-fit"
		{...props}
	>
		訂閱電子報
	</button>
);
