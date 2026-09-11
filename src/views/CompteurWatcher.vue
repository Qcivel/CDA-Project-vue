<template>
    <div>
        <h1>Compteur :</h1>
        
        <div class="count">
            <button class="btn btn-primary" @click="addCount()">+1</button>
            <p>{{ LeNombre }}</p>
            <button class="btn btn-error" @click="AddFive()" >+5</button>
            <p class="text-primary">{{ message }}</p>
        </div>
    </div>
</template>

<script setup lang='js'>
import {ref, watch} from 'vue';

const LeNombre = ref(0);
const numberMystere = ref(7);
const message = ref("");

//Bouton d'incrémentation pour la varaible LeNombre de 5
const AddFive = ()=>{
    return LeNombre.value += 5;
}

// Bouton d'incrémentation pour la varaible LeNombre de 1
const addCount = ()=>{
    return LeNombre.value ++ ;
}

//Logique d'affichage des messages pour guider l'utilisateur
watch(LeNombre, (newValue) => {
    if (newValue < numberMystere.value){
        message.value = "Essaie encore";
    }else if (newValue === numberMystere.value) {
        message.value ="le nombre mystere est bien " + numberMystere.value;
    }else if(newValue >= 30){
        message.value ="BCP BCP mais alors bcp TROP";
        setTimeout(() => {
            message.value = ""; 
            LeNombre.value = 0;   
        }, 3000);
    } else if (newValue > numberMystere.value) {
        message.value = "Tu as dépassé le nombre";
    }
        
});
</script>

<style scoped lang="css">
</style>