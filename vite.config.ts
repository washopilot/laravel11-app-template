import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: 'resources/js/app.tsx'
        })
    ],
    server: {
        host: '0.0.0.0', // Permite conexiones desde fuera de WSL2
        hmr: {
            host: 'localhost'
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js')
        }
    }
})
