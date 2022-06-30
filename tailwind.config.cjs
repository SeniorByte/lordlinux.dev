/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'2': '0 17px 18px -21px rgb(41 41 44 / 74%)',
			  }
		},
	},
	plugins: [],
}
