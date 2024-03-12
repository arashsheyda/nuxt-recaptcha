<script setup lang="ts">
definePageMeta({
  label: 'Welcome',
})

const recaptcha = useRecaptcha()
</script>

<template>
  <div>
    Nuxt Recaptcha Playground!

    <hr class="my-4">
    <UKbd size="md">
      config:
    </UKbd>
    {{ recaptcha.config }}
  </div>
</template>
