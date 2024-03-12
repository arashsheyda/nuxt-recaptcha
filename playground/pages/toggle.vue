<script setup lang="ts">
definePageMeta({
  label: 'Toggle',
})

const recaptcha = useRecaptcha()

recaptcha.toggleBadge()

const code = `
function toggleBadge() {
  onMounted(() => {
    hidden.value = true
  })
  onBeforeUnmount(() => {
    hidden.value = false
  })
}
`
</script>

<template>
  <div>
    The recaptcha is hidden in this page, but when user navigates to another page, it will be shown. you can find the code used for this function below:
    <pre class="mt-4" v-html="code" />
  </div>
</template>
