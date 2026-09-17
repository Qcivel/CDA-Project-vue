<template>
    <form action="" @submit.prevent="addTask">
        <label for="">Titre :</label>
        <input class="input" type="text" placeholder="Titre de la tâche" v-model="nameTask">
        <label for="tache">Catégories :</label>
        <select name="tache" v-model="selectCategories" >
        <option value="travail" >Travail</option>
        <option value="personnel" >Personnel</option>
        <option value="urgent" >Urgent</option>
        
        </select>
        <button class="btn btn-primary" >Ajouter</button>
    </form>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
let nameTask = ref("");
let selectCategories = ref("travail");


const emit = defineEmits(['addTask']);

function addTask(){
    if(nameTask.value == ""){
        return
    }
    emit('addTask',{
        title:nameTask.value, 
        category:selectCategories.value,
        
    });

    nameTask.value="";
    selectCategories.value = "travail";
}
</script>

<style scoped lang="css">
</style>