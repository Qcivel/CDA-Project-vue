<template>
    <TaskForm @addTask="creatTask" />
    <TaskItem v-for="value in tasks" :id="value.id" :title="value.title" :category="value.category" :isCompleted="value.isCompleted" :key="value.id" @deleteTask="deleteMyTask" @togleComplete="togle"/>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import TaskForm from '../components/TaskForm.vue';
import TaskItem from '../components/TaskItem.vue';

const tasks = ref([
    { id: 1, title: 'Préparer le cours Vue 3', category: 'Travail', isCompleted: true },
    { id: 2, title: 'Acheter du café', category: 'Personnel', isCompleted: false },
]);


function creatTask(task){
    tasks.value.push(task);
}

function deleteMyTask(id){
    const task = tasks.value.find(e=> e.id === id);
    console.log(task)
    tasks.value.splice(id,1);
}

function togle(){
    // const task = tasks.value.find(e=> e.id=== test);
    
    console.log("test");
    // tasks.value.strike();
    
}
</script>

<style scoped lang="css">
</style>