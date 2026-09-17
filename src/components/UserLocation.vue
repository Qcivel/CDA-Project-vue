<template>
  
    <p> latitude : {{ coords.latitude }}</p>
    <p> longitude : {{ coords.longitude }}</p>
    <button @click="googleMapsUrl" >Position</button>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error, resume, pause } = useGeolocation()

const googleMapsUrl = computed<string>(() => {
    // Ici coords.value le composable useGeolocation renvoie un objet dasn lequel coords est lui même une ref
    return `https://www.google.com/maps?q=${coords.value.latitude},${coords.value.longitude}`;
});

</script>

<style scoped lang="css">
</style>