<template>
    <h1>Detail profil</h1>
</template>

<script setup lang='js'>
import { ref, onMounted } from 'vue'
let profils = ref([
    {
        id:1,
        photo: "https://i.pravatar.cc/150?img=1",
        nom: "Alice Dupont",
        metier: "Développeuse Frontend"
    },
    {
        id:2,
        photo: "https://i.pravatar.cc/150?img=2",
        nom: "Karim Benali",
        metier: "Chef de projet"
    },
    {
        id:3,
        photo: "https://i.pravatar.cc/150?img=3",
        nom: "Marie Lefèvre",
        metier: "Designer UX/UI"
    }
])
const route = useRoute(); 
const userId = route.params.id

onMounted(()=>{
    
})
</script>

<style scoped lang="css">
</style>