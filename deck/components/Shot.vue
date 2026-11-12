<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  alt: { type: String, default: '' },
  cap: { type: String, default: '' },
  fit: { type: String, default: 'contain' },
})

const files = import.meta.glob('../images/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const src = computed(() => files[`../images/${props.name}.jpg`] || '')
</script>

<template>
  <figure class="shot" :class="'fit-' + fit">
    <img :src="src" :alt="alt || name" />
    <figcaption v-if="cap">{{ cap }}</figcaption>
  </figure>
</template>
