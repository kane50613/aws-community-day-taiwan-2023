import type { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

export const CTAEventButton: FC<ButtonHTMLAttributes<HTMLAnchorElement>> = ({
	children,
	...props
}) => (
	<a
		href="https://events.awscmd.tw/events/aws-community-day-2023"
		style={{
			background: "linear-gradient(to right, #4776E6 0%, #8E54E9 100%)",
			boxShadow: "0px 4px 12px 2px rgba(142, 84, 233, 0.25)",
		}}
		{...props}
		className={cn(
			"md:text-md w-fit gap-3 whitespace-nowrap rounded-lg px-6 py-2 text-sm text-white",
			props.className,
		)}
	>
		立即報名
	</a>
);
