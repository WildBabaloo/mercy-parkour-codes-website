import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js"
  ],
  theme: {
  	extend: {
  		colors: {
			'beginner-cyan': '#00ffff',
			'beginner/easy-light-cyan': '#38ffc7',
			'easy-light-lime-green': '#6fff8f',
			'easy/low-inter-lime-green': '#90d883',
			'low-inter-desaturated-green': '#a0c47d',
			'low-inter/inter-desaturated-yellow': '#d0cf72',
			'intermediate-yellow': '#ffdf66',
			'inter/high-inter-vivid-orange': '#ffba33',
			'high-inter-orange': '#ff9900',
			'high-inter/hard-dark-orange': '#ff4d00',
			'hard-red': '#ff0000',
			'hard/very-hard-dark-pink': '#a54376',
			'very-hard-soft-blue': '#4a86eb',
			'very-hard/expert-bright-violet': '#7243f5',
			'expert-violet': '#9900ff',
			'expert/super-expert-vivid-violet': '#b609ff',
			'super-expert-vivid-magenta': '#ff1fff',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
