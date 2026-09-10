<template>
    <div>
        <h2>Le numéro gagnant</h2>
        <button>-</button>
        <button>+</button>
        <p>le nombre : </p>
        

    </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

let nbr =ref(0);

function nbrPlus(){
    nbr++
}

</script>

<style scoped lang="css">
</style>