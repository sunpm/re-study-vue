<template>
  <h2>文本插值</h2>
  <span>Message: {{ msg }}</span>
  <hr>
  <h2>原始html</h2>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <hr>
  <h2>Attribute 绑定</h2>
  <div v-bind:id="dynamicId"></div>
  <div :id="dynamicId"></div>
  <hr>
  <h2>布尔型 Attribute</h2>
  <button :disabled="isButtonDisabled">Button</button>
  <hr>

</template>

<script setup>
import { ref } from 'vue'

const msg = ref('文本插值')

const rawHtml = ref(`<span style="color: red">This should be red.</span>`)

const dynamicId = ref('dynamic-id')

const isButtonDisabled = ref(true)
</script>

<style scoped>

</style>
