<template>
    <h1 class="text-3xl font-bold"> Compteur avec pinia</h1>
    <div class="count">
        <p class="badge badge-info"> Compteur :{{ store.count }}</p>
        <button class="btn btn-primary" @click="store.increment"> incrémenter</button>
        <button class="btn btn-secondary" @click="store.decrement"> Décrémenter</button>
        <button class="btn btn-warning" @click="store.reset"> Réinitialiser</button>
    </div>
    <UserLocation/>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

import { useCounterStore } from '../stores/counterStore'
import UserLocation from '../components/UserLocation.vue';

const store = useCounterStore();



</script>

<style scoped lang="css">
.count{
    margin: 10px;
}
button{
    margin: 10px;
}
</style>