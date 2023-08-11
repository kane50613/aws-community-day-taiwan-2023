import { Balancer } from "react-wrap-balancer";
import type { FC } from "react";

export const TrackTalk: FC<{
	title?: string;
	speaker?: string;
}> = ({ title, speaker }) => (
	<div className="flex flex-col items-center gap-2 py-4 text-center">
		{title && (
			<span className="text-sm font-medium md:text-base">
				<Balancer>{title}</Balancer>
			</span>
		)}
		{speaker && <span className="text-xs text-gray-300">{speaker}</span>}
	</div>
);
