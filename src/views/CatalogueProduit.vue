<template>
    <h1>Catalogue Produit</h1>
    <input type="text" v-model="searchQuery" placeholder="Rechercher un produit..." class="input input-bordered" />
    <select v-model="selectedCategory" class="select select-bordered">
        <option value="Toutes">Toutes</option>
        <option value="Électronique">Électronique</option>
        <option value="Vêtements">Vêtements</option>
        <option value="Accessoires">Accessoires</option>
    </select>
    <label class="label cursor-pointer gap-2">
        <input type="checkbox" v-model="onlyInStock" class="checkbox" />
        En stock uniquement
    </label>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const products = ref([
   { id: 1, title: 'Casque Sans Fil Pro', category: 'Électronique', price: 199, inStock: true, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
   { id: 2, title: 'Clavier Mécanique RGB', category: 'Électronique', price: 129, inStock: false, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500' },
   { id: 3, title: 'Veste en Jean Vintage', category: 'Vêtements', price: 89, inStock: true, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500' },
   { id: 4, title: 'Chaussures de Running', category: 'Vêtements', price: 110, inStock: true, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
   { id: 5, title: 'Gourde Isotherme 1L', category: 'Accessoires', price: 25, inStock: true, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500' },
   { id: 6, title: 'Montre Connectée Sport', category: 'Électronique', price: 249, inStock: false, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' }
]);

let searchQuery = ref("");
let selectedCategory = ref("Toutes")
let onlyInStock = ref(false)

let filterProducts = computed(()=>{
    
})
</script>

<style scoped lang="css">
</style>