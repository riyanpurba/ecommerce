// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			urlBase: process.env.NUXT_PUBLIC_URL_BASE,
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'id',
			},
			title: 'Situs Jual Beli Online Terlengkap, Mudah & Aman | E-commerce',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'index, follow,max-image-preview:large' },
				{
					hid: 'description',
					name: 'description',
					content:
						'Situs jual beli online terlengkap dengan berbagai pilihan toko online terpercaya.',
				},
				{
					name: 'keywords',
					content: '',
				},
				{ name: 'author', content: 'riyanpurba' },
				{
					property: 'og:title',
					content: 'Situs Jual Beli Online Terlengkap, Mudah & Aman | E-commerce',
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:description',
					content:
						'Situs jual beli online terlengkap dengan berbagai pilihan toko online terpercaya.',
				},
				{
					property: 'og:image',
					content: process.env.NUXT_PUBLIC_URL_BASE + '/favicon.ico',
				},
				{
					property: 'og:image:secure_url',
					content: process.env.NUXT_PUBLIC_URL_BASE + '/favicon.ico',
				},
				{
					property: 'og:image:type',
					content: 'image/png',
				},
				{
					property: 'og:image:alt',
					content: 'E-commerce',
				},
				{
					property: 'og:image:width',
					content: '512',
				},
				{
					property: 'og:image:height',
					content: '512',
				},
				{ property: 'og:url', content: process.env.NUXT_PUBLIC_URL_BASE },

				// twitter
				{ property: 'twitter:card', content: 'summary_large_image' },
				{ property: 'twitter:site', content: '@ecommerce' },
				{
					property: 'twitter:title',
					content: 'Situs Jual Beli Online Terlengkap, Mudah & Aman | E-commerce',
				},
				{
					property: 'twitter:description',
					content: 'Situs jual beli online terlengkap dengan berbagai pilihan toko online terpercaya.',
				},
				{
					property: 'twitter:image',
					content: process.env.NUXT_PUBLIC_URL_BASE + '/favicon.ico',
				},
				{
					property: 'twitter:creator',
					content: '@ecommerce',
				},
			],
		},
		pageTransition: {
			name: 'fade',
			mode: 'out-in',
		},
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	typescript: {
		strict: false,
	},
});
