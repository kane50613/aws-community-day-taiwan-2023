import type { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

export const CTAEventButton: FC<ButtonHTMLAttributes<HTMLAnchorElement>> = ({
	children,
	...props
}) => (
	<a
		href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_3UT6yumYZU4Bjro?qsid=undefined"
		style={{
			background: "linear-gradient(to right, #4776E6 0%, #8E54E9 100%)",
			boxShadow: "0px 4px 12px 2px rgba(142, 84, 233, 0.25)",
		}}
		{...props}
		className={cn(
			"md:text-md w-fit gap-3 whitespace-nowrap rounded-lg px-6 py-2 text-sm text-white",
			props.className,
		)}
		target="_blank"
	>
		填寫活動問卷
	</a>
);
