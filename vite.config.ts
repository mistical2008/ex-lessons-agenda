/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import vitePluginImp from 'vite-plugin-imp'
/* @ts-ignore */
import path from 'path'

const theme = {
    color: {
        primary: '#189033',
    },
}

const globalVendorPackages = ['react', 'react-dom', 'antd']

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    console.log({ command, mode })
    return {
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: 'src/shared/setupTests.ts',
        },
        plugins: [
            react(),
            tsconfigPaths(),
            vitePluginImp({
                libList: [
                    {
                        libName: 'antd',
                        style: (name: string) => `antd/es/${name}/style`,
                    },
                ],
            }),
        ],
        resolve: {
            alias: [
                {
                    find: /^~/,
                    replacement: path.resolve(process.cwd(), 'node_modules'),
                },
                { find: /^@\//, replacement: path.resolve(process.cwd()) },
                // {
                //     find: /^src/,
                //     replacement: path.resolve(process.cwd(), 'src'),
                // },
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
    }
})
