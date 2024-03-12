<!-- ![nuxt3-recaptcha](https://raw.githubusercontent.com/arashsheyda/nuxt3-recaptcha/main/playground/public/social-card.jpg) -->

## Nuxt 3 Recaptcha

[Nuxt 3](https://nuxt.com/) integration for [Google Recaptcha](https://www.google.com/recaptcha/about/)


## Installation

```bash
pnpm add nuxt3-recaptcha
```

## Usage

Add `nuxt3-recaptcha` to the `modules` section of your `nuxt.config.ts` file.

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt3-recaptcha',
  ],

  recaptcha: {
    siteKey: '...'
  },
})
```

For more info, please refer to our [documentation](https://docs.arashsheyda.me/nuxt3-recaptcha).

## License

[MIT License](./LICENSE)
