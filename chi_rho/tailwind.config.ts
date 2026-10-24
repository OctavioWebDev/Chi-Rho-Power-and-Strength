import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			iron: '#0B0A08',
  			plate: '#15130F',
  			rule: '#2A261F',
  			chalk: '#F4F1EA',
  			dust: '#9C968A',
  			brass: '#EAB308',
  			paper: '#EDE8DC',
  			ink: '#1A1712',
  			'ink-2': '#6D675C',
  			pencil: '#8A6A12'
  		},
  		fontFamily: {
  			display: ['var(--font-display)', 'Arial Narrow', 'sans-serif'],
  			body: ['var(--font-body)', 'Helvetica Neue', 'Arial', 'sans-serif']
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
};
export default config;
