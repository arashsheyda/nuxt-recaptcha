import { ref, watch } from 'vue'
import { useRuntimeConfig } from '#imports'

const hidden = ref(false)

export const useRecaptcha = () => {

  const { $recaptcha } = useNuxtApp()

  const config = useRuntimeConfig()

  watch(hidden, (value) => {
    useHead({
      style: [
        {
          key: `recaptcha-badge`,
          innerHTML: `
          .grecaptcha-badge {
            display: ${value ? 'none' : 'block'} !important;
          }
          `,
        },
      ],
    })
  })

  return {
    hidden,
    hideBadge,
    showBadge,
    toggleBadge,
    config: $recaptcha,
    ...config.public.recaptcha,
  }
}

function hideBadge() {
  hidden.value = true
}

function showBadge() {
  hidden.value = false
}

function toggleBadge() {
  onMounted(() => {
    hidden.value = true
  })
  onBeforeUnmount(() => {
    hidden.value = false
  })
}
