import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	...tseslint.configs.strict,
	...tseslint.configs.stylisticTypeChecked,
	...tseslint.configs.strictTypeChecked,
	{
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			"react-hooks": eslintReactHooks,
			"react-refresh": eslintReactRefresh,
			react: eslintReact,
			prettier: prettierPlugin
		}
		// parserOptions: eslintReact.configs.recommended.parserOptions, // for js
	},
	{
		ignores: [
			"node_modules",
			"dist",
			".next",
			"next.config.mjs",
			"eslint.config.js"
		]
	},
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2021
			},
			parserOptions: {
				project: ["tsconfig.json"]
			}
		}
	},
	{
		files: ["src/**/*.{ts, tsx}"],
		rules: {
			"prefer-const": "warn",
			"no-unused-vars": "warn",
			"no-console": "error",

			"comma-spacing": "off",
			"@typescript-eslint/comma-spacing": { before: true, after: false },

			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",

			// "@typescript-eslint/semi": "warn",
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules
		}
	}
);
