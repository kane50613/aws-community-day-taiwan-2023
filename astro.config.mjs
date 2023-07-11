import { defineConfig, sharpImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		compress(),
	],
	experimental: {
		assets: true,
	},
	image: {
		service: sharpImageService(),
	},
});
