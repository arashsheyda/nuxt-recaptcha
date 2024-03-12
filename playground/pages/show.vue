<script setup lang="ts">
definePageMeta({
  label: 'Show',
})

const recaptcha = useRecaptcha()

recaptcha.showBadge()
</script>

<template>
  <div>
    The recaptcha is always show in this page, as we are using <UKbd size="md">
      recaptcha.showBadge()
    </UKbd>
  </div>
</template>
