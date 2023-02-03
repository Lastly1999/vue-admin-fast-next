import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:[
      {
        find:"@",
        replacement:path.join(__dirname,"./src")
      }
    ]
  },
  plugins: [
    vue(),
    Unocss({
      presets:[presetUno(), presetAttributify({ /* options */ }),]
    }),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
})
