<template>
    <form action=""  @submit.prevent="addFriend">
        <h2>Ajouter un Nouvel Ami</h2>
        <label for="">Nom : </label>
        <input v-model="nameFriend" type="text" placeholder="Gontrand JeanBert">
        <label for="">Téléphone</label>
        <input v-model="telephoneFriend" type="text" placeholder=" 0945365210">
        <button class="btn" type="submit">Ajouter un ami</button>
    </form>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

let nameFriend = ref("");
let telephoneFriend=ref("");

const emit = defineEmits(['addFriend']);

function addFriend(){
    emit('addFriend',{
        id: Math.random(),
        name: nameFriend.value,
        phone: telephoneFriend.value
    });
}
</script>

<style scoped lang="css">
</style>