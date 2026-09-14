<template>
    <div class="card bg-base-100 w-96 shadow-sm aura" >
        <div>
            <h1 class="card-title">Composant OneFriend.vue</h1>
        </div>
        <div class="card-body" >
            <h2  class="badge badge-error"> id: {{ id }}</h2>
            <p>{{ title }} </p>
            <p class="badge badge-primary">📞 {{ telephone }}  </p>
            <p class="badge badge-secondary">✉ {{ email }}</p>
            <p class="badge badge-info">Premium : {{ premium }}</p>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

// v-model binding (Vue 3.4+)
const model = defineModel({ default: '' });

const props = defineProps({
    title:{
        String,
        required:true,
        default:"Titre"
    } ,
    id:{
        String,
        required:true,
        default:"ID"
    } ,
    telephone:{
        String,
        required:true,
        default:17,
    },
    email:{
        String,
        required:true,
        default:"Jacque.Mesrine@gangster.fr" 
    },
    premium:{
        String,
        required:true,
        default:false
    } 

});


</script>

<style scoped lang="css">
</style>