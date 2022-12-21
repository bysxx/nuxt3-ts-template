<template>
  <article>
    <h2>{{ props.title }}</h2>
    <p>{{ props.desc }}</p>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  desc: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  desc: '',
})
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  border: 1px solid #bbb;
  padding: 5px;
}
</style>
