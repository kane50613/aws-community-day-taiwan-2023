import { defineConfig, sharpImageService } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	experimental: {
		assets: true,
	},
	image: {
		service: sharpImageService(),
	},
});
