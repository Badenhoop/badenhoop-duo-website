import { sveltekit } from '@sveltejs/kit/vite'
import path from "path"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// Unfortunately, these are not recognized by vscode :(
			"@src": path.resolve("./src"),
			"@static": path.resolve("./static"),
			"@components": path.resolve("./src/components"),
		},
	},
};

export default config;
