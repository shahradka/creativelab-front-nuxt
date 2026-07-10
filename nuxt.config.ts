// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  nitro: {
    preset: "cloudflare-pages",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        'class-variance-authority',
        'clsx',
        'reka-ui',
        'tailwind-merge',
      ]
    },
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["nitro-cloudflare-dev", "shadcn-nuxt", '@nuxt/image'],

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  },
})