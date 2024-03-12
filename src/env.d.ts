/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NODE_ENV?: "staging" | "production";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
