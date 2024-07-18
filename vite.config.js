import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import compression from "vite-plugin-compression"

export default defineConfig({
	base: "/points-counter/",
	plugins: [
		react(),
		compression({
			ext: ".gz",
			algorithm: "gzip",
			deleteOriginFile: false,
		}),
		compression({
			ext: ".br",
			algorithm: "brotliCompress",
			deleteOriginFile: false,
		}),
	],
	build: {
		minify: "esbuild",
		rollupOptions: {
			output: {
				manualChunks: {
					"react-icons": ["react-icons"],
				},
			},
		},
	},
})
