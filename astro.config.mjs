// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
// https://astro.build/config
export default defineConfig({
	integrations: [
		site: 'https://fictionweb.github.io',
		base: '/docs',
		starlight({
			title: "test",
			sidebar: [
        { 
          label: "test",
          autogenerate: { directory: '/' },
		}
			],
		}),
	],
});
