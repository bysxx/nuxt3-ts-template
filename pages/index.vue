<template>
  <main>
    <ul>
      <li>Style Reset Test</li>
      <li>{{ count }}</li>
      <li>{{ double }}</li>
      <button @click="increaseCount">+</button>
      <button @click="decreseCount">-</button>
      <input id="test" v-model="count" type="text" />
    </ul>
    <Post :title="`제목${count}`" desc="본문" />
  </main>
</template>

<script setup lang="ts">
const count = ref<number>(1)
const double = computed<string>(() => count.value * 2 + '개')

const increaseCount = () => {
  count.value++
}

const decreseCount = () => {
  count.value--
}

watch(count, (count, prevCount) => {})
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  div {
    color: brown;
  }
}
</style>
