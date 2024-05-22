<!-- ![nuxt-recaptcha](https://raw.githubusercontent.com/arashsheyda/nuxt-recaptcha/main/playground/public/social-card.jpg) -->

## Nuxt Recaptcha

[Nuxt](https://nuxt.com/) integration for [Google Recaptcha](https://www.google.com/recaptcha/about/)


## Installation

```bash
pnpm add nuxt-recaptcha
```

## Usage

Add `nuxt-recaptcha` to the `modules` section of your `nuxt.config.ts` file.

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-recaptcha',
  ],

  recaptcha: {
    siteKey: '...'
  },
})
```

For more info, please refer to our [documentation](https://docs.arashsheyda.me/nuxt-recaptcha).

## License

[MIT License](./LICENSE)
