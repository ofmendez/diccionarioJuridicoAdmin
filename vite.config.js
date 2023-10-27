import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: [
            { find: '@src',     replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: '@styles',  replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
            { find: '@assets',  replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
            { find: '@ico',     replacement: fileURLToPath(new URL('./src/assets/icons', import.meta.url)) },
            { find: '@img',     replacement: fileURLToPath(new URL('./src/assets/img', import.meta.url)) },
        ],
    },
});