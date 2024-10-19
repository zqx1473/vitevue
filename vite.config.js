import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacyPlugin from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	    vue(),
	    legacyPlugin({
	            targets:['defaults', 'not IE 11']
	            // targets:['chrome 52'],  // 需要兼容的目标列表，可以设置多个
	            // additionalLegacyPolyfills:['regenerator-runtime/runtime'] // 面向IE11时需要此插件
	          }),
	],
  base:'./',
})
