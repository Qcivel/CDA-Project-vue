<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card bg-base-100 shadow-md" v-for="value in profils" :key="value.id">
        <figure class="px-6 pt-6">
            <img :src="value.photo" :alt="value.nom" class="rounded-full w-24 h-24 object-cover" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ value.nom }}</h2>
            <p>{{ value.metier }}</p>
            <div class="card-actions">
                <RouterLink :to="{ name: 'profile-detail', params: { id: value.id } }" class="btn btn-primary btn-sm">
                    Voir la fiche
                </RouterLink>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

let profils = ref([
    {
        id:1,
        photo: "https://i.pravatar.cc/150?img=1",
        nom: "Alice Dupont",
        metier: "Développeuse Frontend"
    },
    {
        id:2,
        photo: "https://i.pravatar.cc/150?img=2",
        nom: "Karim Benali",
        metier: "Chef de projet"
    },
    {
        id:3,
        photo: "https://i.pravatar.cc/150?img=3",
        nom: "Marie Lefèvre",
        metier: "Designer UX/UI"
    }
])

</script>

<style scoped lang="css">
</style>