<template>
    <form action="" @submit.prevent=""> 
        <label for="">Enregistrer une photo</label>
        <input type="file" @change="handleFile" >
        <button>Enregistrer</button>

    </form>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

let picture = ref("");

function handleFile(event) {
    const file = event.target.files[0]; // le fichier sélectionné
    if (!file) return;

    console.log(file.name);       // nom du fichier
    console.log(file.size);       // taille en octets
    console.log(file.type);       // type MIME, ex: "image/png"
    console.log(file.lastModified); // timestamp de dernière modif
    console.log(file); // timestamp de dernière modif
}

</script>

<style scoped lang="css">
</style>