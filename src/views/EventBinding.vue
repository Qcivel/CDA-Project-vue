<template>
  <div class="compteur">
    <button :disabled="isDisabled" class="btn btn-error" @click.right.prevent="countMinus">-</button>
    <p>Le nombre est : {{ nbr }}</p>
    <button class="btn btn-primary" @click="countPlus">+</button>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const nbr = ref(0);
const isDisabled = ref(false);



function countPlus() {
    if(nbr.value >= 0){
        nbr.value +=100;
        isDisabled.value = false
    }
}

function countMinus() {
    if(nbr.value>0) {
        isDisabled.value = false
        nbr.value -= 55;
    }

    if(nbr.value < 55){
        isDisabled.value = true
    }
}
</script>

<style scoped lang="css">
.compteur{
    display: flex;
    padding: 10px;
    
}

p{
    margin: 10px;
}
</style>
