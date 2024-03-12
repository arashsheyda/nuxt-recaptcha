import { ref, watch } from 'vue'
import { useRuntimeConfig, useHead } from '#imports'

const hidden = ref(false)

watch(hidden, (value) => {
  useHead({
    style: [
      {
        key: `recaptcha-badge`,
        innerHTML: `.grecaptcha-badge{display:${value?'none':'block'}!important;}`,
      },
    ],
  })
})

const toggleBadge = (value: boolean) => hidden.value = value

export const useRecaptcha = () => {

  const { recaptcha } = useRuntimeConfig().public

  const execute = async (action: string) => await grecaptcha.execute(recaptcha.siteKey, { action })

  return {
    hidden,
    execute,
    toggleBadge,
    hideBadge: () => toggleBadge(true),
    showBadge: () => toggleBadge(false),
    config: recaptcha,
  }
}
