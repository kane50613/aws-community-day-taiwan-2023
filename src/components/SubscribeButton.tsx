import type { ButtonHTMLAttributes, FC } from "react";

export const SubscribeButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	...props
}) => (
	<button
		style={{
			background: "linear-gradient(45deg, #FFA857 0%, #FFDB59 100%)",
		}}
		className="md:text-md w-fit gap-3 whitespace-nowrap rounded-lg px-6 py-2 text-sm"
		{...props}
	>
		訂閱電子報
	</button>
);
