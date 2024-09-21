import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				header: 'hsl(var(--header))',
				card: {
					DEFAULT: 'hsl(var(--blog))',
					foreground: 'hsl(var(--blog-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				accordion: 'hsl(var(--accordion-rules))',
				icon: {
					DEFAULT: 'hsl(var(--icon))',
					foreground: 'hsl(var(--icon-foreground))',
					hover: 'hsl(var(--icon-hover))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				gradient: {
					from: 'hsl(var(--gradient-from))',
					to: 'hsl(var(--gradient-to))',
				},
				bannerGradient: {
					from: 'hsl(var(--banner-gradient-from))',
					via: 'hsl(var(--banner-gradient-via))',
					to: 'hsl(var(--banner-gradient-to))',
				},
				star: 'hsl(var(--star))',
				border: 'hsl(var(--border))',
				select: 'hsl(var(--select))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				raleway: ['var(--font-raleway)'],
			},
			boxShadow: {
				block: '-10px -10px 33px 0px rgba(0, 0, 0, 0)',
				solid: '6px -6px 0px 0px rgba(0, 0, 0, 0)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			scale: {
				click: '0.98',
			},
			animation: {
				'move-in': 'move 2s linear',
				'fade-in': 'fade-in 0.5s linear forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			transitionDelay: {
				'2000': '2000ms',
			},
			keyframes: {
				move: {
					'0%': {
						width: '0',
					},
					'100%': {
						width: '100%',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(1.1)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
