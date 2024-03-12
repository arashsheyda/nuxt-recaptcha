<script setup lang="ts">
definePageMeta({
  label: 'Toggle',
})

const { hidden, toggleBadge } = useRecaptcha()
</script>

<template>
  <div>
    Click to toggle:
    <UButton @click="toggleBadge(hidden ? false : true)">
      {{ hidden ? 'Show' : 'Hide' }}
    </UButton>
  </div>
</template>
