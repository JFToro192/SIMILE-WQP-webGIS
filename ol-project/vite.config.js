import { resolve } from 'path'
console.log(resolve(__dirname, '../server/public'))
export default {
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, '../server/public'),
  },
  server: {
    // Dev port
    port: 1234,
    proxy:{
        '/api': {
            target: 'http://localhost:3000'
        }
    }
},
}
