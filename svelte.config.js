import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), ],
	extensions: ['.svelte'],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: "404.html"
		}),
        paths:{
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        }
		
	},
};

export default config;
			
			