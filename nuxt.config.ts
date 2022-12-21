// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  typescript: {
    strict: true,
    typeCheck: true,
  },

  components: true,

  css: ['~/assets/style/reset.css'],
})
