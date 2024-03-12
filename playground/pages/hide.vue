<script setup lang="ts">
definePageMeta({
  label: 'Hide',
})

const recaptcha = useRecaptcha()
</script>

<template>
  <div>
    <UButton @click="recaptcha.hideBadge()">
      hide
    </UButton>
  </div>
</template>
