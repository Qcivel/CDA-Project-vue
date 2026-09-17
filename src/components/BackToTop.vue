<template>
  
  
  <button @click="y =0">Scroll down 10px</button>
</template>
<script setup lang="js">
import { useWindowScroll } from '@vueuse/core'


const { y } = useWindowScroll()
</script>
