<template>
    <div class="card bg-base-100 w-96 shadow-sm" >
        <div>
            <h1>Composant OneFriend.vue</h1>
        </div>
        <div class="card-body" >
            <h2 class="card-title"> id {{ id }}</h2>
            <p>{{ title }} </p>
            <p class="badge badge-primary">📞 {{ telephone }}  </p>
            <p class="badge badge-secondary">✉ {{ email }}</p>
            <p class="badge badge-info">Premium : {{ premium }}</p>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

// v-model binding (Vue 3.4+)
const model = defineModel({ default: '' });

const props = defineProps({
    title: String,
    id: String,
    telephone: String,
    email: String,
    premium: String

});


</script>

<style scoped lang="css">
</style>