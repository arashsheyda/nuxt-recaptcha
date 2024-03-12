import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin({
  name: 'nuxt-recaptcha',
  setup() {
    const config = useRuntimeConfig()
      useHead({
        script: [
          {
            src: `https://www.google.com/recaptcha/api.js?render=${config.public.recaptcha.siteKey}`,
            async: true,
          }
        ],
      })

    return {
      provide: {
        recaptcha: {
          siteKey: config.public.recaptcha.siteKey,
          version: config.public.recaptcha.version,
        },
      },
    }
  }
})
