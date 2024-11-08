import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: 'https://benchpressboss.github.io/Test-Tele2-Menu/',
	build: {
		outDir: 'docs',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@icons': path.resolve(__dirname, 'public/icons'),
			'@components': path.resolve(__dirname, './src/components'),
			'@screens': path.resolve(__dirname, './src/components/screens'),
			'@styles': path.resolve(__dirname, './src/assets/styles'),
			'@layout': path.resolve(__dirname, './src/components/layout'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
		},
	},
})
