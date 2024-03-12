<script setup lang="ts">
definePageMeta({
  label: 'Token',
})

const recaptcha = useRecaptcha()
const token = ref()

function genToken(e) {
  e.preventDefault();
  grecaptcha.ready(function () {
    grecaptcha.execute(recaptcha.config.siteKey, { action: 'submit' }).then(function (t) {
      token.value = t
    });
  });
}
</script>

<template>
  <div>
    <UButton @click="genToken">
      generate token
    </UButton>
    <pre v-if="token" class="mt-4" v-html="JSON.stringify(token, null, 2)" />
  </div>
</template>
