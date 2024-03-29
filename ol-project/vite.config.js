import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    outDir: path.resolve(__dirname, '../server/public'),
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'css': path.resolve(__dirname, './src/assets/css'),
      'img': path.resolve(__dirname, './src/assets/img'),
      'js': path.resolve(__dirname, './src/assets/js'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    proxy: {
        //Focus here
        '/geoserver': {
            target: "https://www.geonode.eo.simile.polimi.it/",
            changeOrigin: true,
            rewrite: (path) => { console.log(path); return path.replace('/^\/geoserver/geonode', '') }
        }
    }
  }
})