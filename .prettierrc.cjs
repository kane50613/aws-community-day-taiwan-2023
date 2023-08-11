module.exports = {
	semi: true,
	useTabs: true,
	trailingComma: "all",
	tabWidth: 2,
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
