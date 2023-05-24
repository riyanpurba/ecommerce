<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
	const route = useRoute();
	const config = useRuntimeConfig();
	useHead(() => ({
		link: [
			{
				rel: 'canonical',
				href: process.env.NUXT_PUBLIC_URL_BASE + route.path,
			},
		],
	}));
</script>

<style scoped>

</style>