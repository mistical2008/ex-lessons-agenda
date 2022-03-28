/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import vitePluginImp from 'vite-plugin-imp'
import mockServer from 'vite-plugin-mock-server'
/* @ts-ignore */
import path from 'path'

const theme = {
    color: {
        primary: '#189033',
    },
}

const globalVendorPackages = ['react', 'react-dom']

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/shared/setupTests.ts',
    },
    plugins: [
        react(),
        tsconfigPaths(),
        vitePluginImp(),
        mockServer({ logLevel: 'info' }),
    ],
    resolve: {
        alias: [
            {
                find: /^~/,
                replacement: path.resolve(process.cwd(), 'node_modules'),
            },
            { find: '@', replacement: path.resolve(process.cwd()) },
        ],
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': theme.color.primary,
                    '@link-color': theme.color.primary,
                },
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: globalVendorPackages,
                },
            },
        },
    },
})
