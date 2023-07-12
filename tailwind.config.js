/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: [
		'./_includes/**/*.html',
		'./_layouts/**/*.html',
		'./_posts/*.md',
		'./*.html',
	],
  theme: {
    extend: {},
  },
  plugins: [],
}
