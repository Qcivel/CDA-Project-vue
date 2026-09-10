<template>
    <h1>Les API</h1>
    <div>
        <h2> Les pokemon :</h2>
        <p v-for="(value,index) in pokemonList" :key="index">
            <ul>
                <li class="badge badge-info">{{ value.name }}</li>
            </ul>
        </p>
        <h2>La méteo :</h2>
         <!-- <p > température max : {{ meteo.fcst_day_0.tmax}} °C</p>
        <p > température min : {{ meteo.fcst_day_0.tmin}} °C</p>
        <p > température actuelle : {{ meteo.current_condition.tmp}} °C</p>
        <p > Condition méteo : {{ meteo.fcst_day_0.condition}} </p>  -->
        <h2>Digimons :</h2>
        <p v-for="(value,index) in digimon" :key="index">
            <ul>
                <li class="badge badge-info">{{ value.name }}</li>
                <img :src="value.image" alt="">
            </ul>
        </p>
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