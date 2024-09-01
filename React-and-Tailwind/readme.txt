Install tailwind:
	npm install -D tailwindcss postcss autoprefixer
	npx tailwindcss init -p
	
	Paste it in tailwinf.config.cjs:
		/** @type {import('tailwindcss').Config} */
			export default {
			  content: [
			    "./index.html",
			    "./src/**/*.{js,ts,jsx,tsx}",
			  ],
			  theme: {
			    extend: {},
			  },
			  plugins: [],
			}



	And paste this in index.css.
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	
