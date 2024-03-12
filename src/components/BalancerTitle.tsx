import type { ComponentProps, FC } from "react";
import { Balancer } from "react-wrap-balancer";

// a wrapper for client hydrated component or astro will break!
export const BalancerTitle: FC<ComponentProps<typeof Balancer>> = (props) => (
  <Balancer {...props} />
);
