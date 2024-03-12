import { defineNuxtModule, createResolver, addPlugin, addImportsDir, logger } from '@nuxt/kit'
import defu from 'defu'

export interface ModuleOptions {
  /**
   *  Version of Recaptcha to use.
   *
   * TODO: support for v2
   *
   * @default 'v3'
   *
   */
  version?: 'v3'
  /**
   *  Site key for Recaptcha.
   *
   * @default process.env.RECAPTCHA_SITE_KEY
   *
   */
  siteKey: string
}

// @ts-ignore
declare module '#app' {
  const grecaptcha: any;

  interface Window {
    grecaptcha: any;
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-recaptcha',
    configKey: 'recaptcha',
  },
  defaults: {
    siteKey: process.env.RECAPTCHA_SITE_KEY as string,
    version: 'v3',
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const config = nuxt.options.runtimeConfig

    if (!options.siteKey) {
      logger.log('Nuxt Recaptcha needs a siteKey to work. Please provide one.')
      return
    }


    config.public.recaptcha = defu(config.public.recaptcha || {}, {
      ...options,
    })

    addPlugin(resolve('./runtime/plugins/recaptcha'))

    addImportsDir(resolve('./runtime/composables'))

    logger.info('Recaptcha module has been initialized!')
  }
})
