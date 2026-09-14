<template>
    <div class="aura hover-3d" :class="{ 'aura-rainbow': premium }">
        <div class="card bg-base-100 w-96 shadow-sm aura" :class="{ 'aura-holo': premium }" >
            <div >
                <h1 class="card-title ">Composant OneFriend.vue</h1>
            </div>
            <div class="card-body  " >
                <h2  class="badge badge-error"> id: {{ id }}</h2>
                <p>{{ title }} </p>
                <p class="badge badge-primary">📞 {{ telephone }}  </p>
                <p class="badge badge-secondary">✉ {{ email }}</p>
                <p class="badge badge-info">Premium : {{ premium }}</p>
            </div>
            <div class="card-actions justify-end">
                <button @click="defPremium" class="btn btn-primary">Update Premium</button>
                <button @click="deleteFriend" class="btn btn-error">Delete Friends</button>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

// v-model binding (Vue 3.4+)
let classBtn  = "";

const props = defineProps({
    title:{
        String,
        required:true,
        default:"Titre"
    } ,
    id:{
        String,
        
        default: "id"
    } ,
    telephone:{
        String,
        required:true,
        default:17,
    },
    email:{
        String,
        
        default:"Jacque.Mesrine@gangster.fr" 
    },
    premium:{
        String,
        
        default:false
    } 
});

const emit = defineEmits(['premium','deleteFriend'])


function deleteFriend(){
    emit('deleteFriend',props.id);
}

function defPremium(){
    emit('premium', props.id )
}


</script>
<style scoped lang="css">
.aura{
    margin:10px;
}
</style>