// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
// https://astro.build/config
export default defineConfig({
	site: 'https://fiction.tirito.de',
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: "Fiction",
			sidebar: [
        { 
          label: "Guides",
          autogenerate: { directory: '/guides' },
		},
		{
			label: "BashX",
			autogenerate: { directory: '/bashx' }
		},
		{ 
			label: "Reference",
			autogenerate: { directory: '/reference' }
		}
			],
		}),
	],
});
