import { ref, watch } from 'vue'
import { useRuntimeConfig, useHead } from '#imports'

const hidden = ref(false)

export const useRecaptcha = () => {

  const { recaptcha } = useRuntimeConfig().public

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

  const execute = async (action: string) => {
    return await grecaptcha.execute(recaptcha.siteKey, { action })
  }

  return {
    hidden,
    execute,
    hideBadge,
    showBadge,
    ...recaptcha,
  }
}

function hideBadge() {
  hidden.value = true
}

function showBadge() {
  hidden.value = false
}

// function toggleBadge() {
//   onMounted(() => {
//     hidden.value = true
//   })
//   onBeforeUnmount(() => {
//     hidden.value = false
//   })
// }
