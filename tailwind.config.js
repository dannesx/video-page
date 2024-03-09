/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				comment: {
					'0%': {
						transform: 'translateX(100px)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1,
					},
				},
			},
			animation: {
				comment: 'comment 0.2s ease-in-out forwards',
			},
		},
	},
	plugins: [],
}
