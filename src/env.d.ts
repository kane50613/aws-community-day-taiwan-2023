/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly NODE_ENV?: "staging" | "production";
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
