<template>
    <div class="maTache">
        <input  type="checkbox" v-model="check" @click="togleComplete">
        <p> titre de la tache : {{ title }} categories : <span class="badge badge-secondary">{{ category }} </span> etat: {{ isCompleted }}  </p>
        <button class="btn btn-error" @click="deleteTask">Supprimer</button>
    </div>
   
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
let check = ref("");
console.log(check);
// import  { Task } from '../types/Task'

const props = defineProps({
    id:{
        String,
        default:"id"
    },
    title:{
        String,
        default:"Ma tache"
    },
    category:{
        String,
        default:"Travail"
    },
    isCompleted:{
        Boolean,
        default:true
    }
})

const emit = defineEmits(['toggle-complete', 'delete-task']);

function togleComplete(){
    emit('toggle-complete',props.id);
}

function deleteTask(){
    emit('delete-task', props.id )
}
</script>

<style scoped lang="css">
.maTache{
    display: flex;
}
</style>