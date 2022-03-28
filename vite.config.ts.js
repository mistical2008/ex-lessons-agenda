// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import vitePluginImp from "vite-plugin-imp";
import mockServer from "vite-plugin-mock-server";
import path from "path";
var theme = {
  color: {
    primary: "#189033"
  }
};
var globalVendorPackages = ["react", "react-dom"];
var vite_config_default = defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/shared/setupTests.ts"
  },
  plugins: [
    react(),
    tsconfigPaths(),
    vitePluginImp(),
    mockServer({ logLevel: "info" })
  ],
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: path.resolve(process.cwd(), "node_modules")
      },
      { find: "@", replacement: path.resolve(process.cwd()) }
    ]
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": theme.color.primary,
          "@link-color": theme.color.primary
        }
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: globalVendorPackages
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZS9jbGllbnRcIiAvPlxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCB2aXRlUGx1Z2luSW1wIGZyb20gJ3ZpdGUtcGx1Z2luLWltcCdcbmltcG9ydCBtb2NrU2VydmVyIGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2stc2VydmVyJ1xuLyogQHRzLWlnbm9yZSAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY29uc3QgdGhlbWUgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgICAgcHJpbWFyeTogJyMxODkwMzMnLFxuICAgIH0sXG59XG5cbmNvbnN0IGdsb2JhbFZlbmRvclBhY2thZ2VzID0gWydyZWFjdCcsICdyZWFjdC1kb20nXVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICB0ZXN0OiB7XG4gICAgICAgIGdsb2JhbHM6IHRydWUsXG4gICAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgICBzZXR1cEZpbGVzOiAnc3JjL3NoYXJlZC9zZXR1cFRlc3RzLnRzJyxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgdHNjb25maWdQYXRocygpLFxuICAgICAgICB2aXRlUGx1Z2luSW1wKCksXG4gICAgICAgIG1vY2tTZXJ2ZXIoeyBsb2dMZXZlbDogJ2luZm8nIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbmQ6IC9efi8sXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSkgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlT25seScsXG4gICAgICAgIH0sXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxlc3M6IHtcbiAgICAgICAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb2RpZnlWYXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdAcHJpbWFyeS1jb2xvcic6IHRoZW1lLmNvbG9yLnByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICdAbGluay1jb2xvcic6IHRoZW1lLmNvbG9yLnByaW1hcnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAgICAgICAgICAgdmVuZG9yOiBnbG9iYWxWZW5kb3JQYWNrYWdlcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNLFFBQVE7QUFBQSxFQUNWLE9BQU87QUFBQSxJQUNILFNBQVM7QUFBQSxFQUNiO0FBQ0o7QUFFQSxJQUFNLHVCQUF1QixDQUFDLFNBQVMsV0FBVztBQUdsRCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixNQUFNO0FBQUEsSUFDRixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxJQUNkLFdBQVcsRUFBRSxVQUFVLE9BQU8sQ0FBQztBQUFBLEVBQ25DO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSDtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsY0FBYztBQUFBLE1BQzNEO0FBQUEsTUFDQSxFQUFFLE1BQU0sS0FBSyxhQUFhLEtBQUssUUFBUSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQUEsSUFDMUQ7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxrQkFBa0I7QUFBQSxJQUN0QjtBQUFBLElBQ0EscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBQ0YsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLFVBQ1Isa0JBQWtCLE1BQU0sTUFBTTtBQUFBLFVBQzlCLGVBQWUsTUFBTSxNQUFNO0FBQUEsUUFDL0I7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILGVBQWU7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNKLGNBQWM7QUFBQSxVQUNWLFFBQVE7QUFBQSxRQUNaO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
