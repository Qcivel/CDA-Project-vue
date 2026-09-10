<template>
    <div>
        <label for="filmName">Nom du film :</label>
        <input class="input input-neutral" v-model="addFilm">
        <button @click="pushFilm()"> Envoyer</button>
            
        <p v-for="(task, index) in showFilm" :key="index" ><ul>
            <li class="badge badge-info" @click="deleteFilm(index)">{{ task }}</li>
        </ul></p>
        <p v-if="showFilm.length == 0" >Aucun film </p>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

let showFilm = ref([]);
let addFilm = ref("");

function pushFilm(){
    showFilm.value.push(addFilm.value);
    addFilm.value="";
}

function deleteFilm(index){
    showFilm.value.splice(index,1);
}

console.log(addFilm)
</script>

<style scoped lang="css">

</style>