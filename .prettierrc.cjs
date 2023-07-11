module.exports = {
	semi: true,
	useTabs: true,
	trailingComma: "all",
	tabWidth: 4,
	singleQuote: false,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require("prettier-plugin-tailwindcss"),
	],
	pluginSearchDirs: false,
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
