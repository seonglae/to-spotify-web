import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    include: [
      '**/*.{md,vue}',
      '.vitepress/**/*.{ts,md,vue}' 
    ],
  },
  attributify: true,
  shortcuts: {
    'bg-main': 'bg-white dark:bg-[#111]',
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4283f5',
          deep: '#62bbff',
        },
      },
      fontFamily: {
        mono: '\'IBM Plex Mono\', source-code-pro, Menlo, Monaco, Consolas, \'Courier New\', monospace',
      },
    },
  },
})
