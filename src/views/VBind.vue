<template>
  <h1>Les directives v-bind</h1>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        :src="img"
        v-bind:alt="alt"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{nom}}</h2>
      <input  v-model="nom">
      <p> Age : {{ age }} ans </p>
      <p> Age + 10 : {{ age + 10 }} ans </p>
      <p>Nb Fétiche : {{ random }}</p>
      
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

let img = ref("https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp");
let alt = ref("Shoes")
let nom = ref("Dr Mario");
let age = ref(32)
let random = Math.random();
</script>

<style scoped lang="css"></style>
