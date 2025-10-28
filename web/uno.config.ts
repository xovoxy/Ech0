import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind4()],
  preflights: [
    {
      getCSS: () => `
        /* 自定义字体定义 */
        @font-face {
          font-family: 'CJKFont';
          src: url('https://miniprogram-1310122601.cos.ap-beijing.myqcloud.com/fonts/cjkFonts.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* 全局字体应用 */
        * {
          font-family: CJKFont, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
        }

        html, body {
          font-family: CJKFont, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
        }
      `,
    },
  ],
})
