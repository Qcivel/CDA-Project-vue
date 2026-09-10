<template>
    <div class="max-w-4xl mx-auto px-6 py-10">
        <h1 class="text-3xl font-bold mb-8">Les API</h1>

        <!-- Pokémon -->
        <div class="card bg-base-200 shadow mb-6">
            <div class="card-body">
                <h2 class="card-title text-xl mb-4">⚡ Les pokemon :</h2>
                <div class="flex flex-wrap gap-2">
                    <span v-for="(value, index) in pokemonList" :key="index" class="badge badge-info badge-lg">
                        {{ value.name }}
                    </span>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <!-- Météo -->
        <div class="card bg-base-200 shadow mb-6">
            <div class="card-body">
                <h2 class="card-title text-xl mb-4">🌤️ La météo :</h2>
                <!-- <p > température max : {{ meteo.fcst_day_0.tmax}} °C</p>
                <p > température min : {{ meteo.fcst_day_0.tmin}} °C</p>
                <p > température actuelle : {{ meteo.current_condition.tmp}} °C</p>
                <p > Condition météo : {{ meteo.fcst_day_0.condition}} </p> -->
            </div>
        </div>

        <div class="divider"></div>

        <!-- Digimons -->
        <div class="card bg-base-200 shadow mb-6">
            <div class="card-body">
                <h2 class="card-title text-xl mb-4">🦕 Digimons :</h2>
                <div class="flex flex-wrap gap-6">
                    <div v-for="(value, index) in digimon" :key="index" class="flex flex-col items-center gap-2">
                        <div class="avatar">
                            <div class="w-24 rounded-xl">
                                <img :src="value.image" :alt="value.name" />
                            </div>
                        </div>
                        <span class="badge badge-warning">{{ value.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'


let pokemonList = ref([]);
let meteo = ref([]);
let digimon= ref([]);

async function getPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
         const data = await response.json();
        console.log("Post récupéré :", data);
        pokemonList.value = data.results

    } catch (error) {
        console.error("Erreur :", error);
    }
}

// async function getMeteo() {
//     try {
//         const response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
//         const data = await response.json();
//         console.log("Post récupéré de meteo :", data);
//         meteo.value = data

//     } catch (error) {
//         console.error("Erreur :", error);
//     }
// }

async function getDigimons() {
    try {
        const response = await fetch("https://digi-api.com/api/v1/digimon");
        const data = await response.json();
        console.log("Post récupéré de digimon:", data);
        digimon.value = data.content

    } catch (error) {
        console.error("Erreur :", error);
    }
}


onMounted(() => {
    getPokemon();
    // getMeteo();
    getDigimons();
});



</script>

<style scoped lang="css">
</style>
