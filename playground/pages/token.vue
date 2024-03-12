<script setup lang="ts">
definePageMeta({
  label: 'Token',
})

const recaptcha = useRecaptcha()
const token = ref()

async function genToken() {
  token.value = await recaptcha.execute('login')
}
</script>

<template>
  <div>
    <UButton @click="genToken">
      generate token
    </UButton>
    <pre
      v-if="token"
      class="mt-4"
      v-html="JSON.stringify(token, null, 2)"
    />
  </div>
</template>
