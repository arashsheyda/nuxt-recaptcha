<script setup lang="ts">
const router = useRouter()
const recaptcha = useRecaptcha()

const routes = computed(() => router.getRoutes()
  .sort((a, b) => a.path.localeCompare(b.path))
  .map((route) => ({
    label: route.meta.label ?? router.name,
    to: route.path,
  }))
)
</script>

<template>
  <UContainer>
    <UCard class="h-screen my-8">
      <div class="relative flex">
        <UHorizontalNavigation
          :links="routes"
          class="border-b border-gray-200 dark:border-gray-800 capitalize"
        />
        <span class="flex items-center gap-2 absolute right-0">
          Badge is Hidden:<UKbd size="md">{{ recaptcha.hidden }}</UKbd>
        </span>
      </div>
      <main class="my-8">
        <NuxtPage />
      </main>
    </UCard>
  </UContainer>
</template>
