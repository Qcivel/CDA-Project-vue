<template>
    <div class="card">
        <div class="updateStyle">
            <button :style="{backgroundColor: btn1 === true ? 'red':'aqua' }" @click="switchStyle1()"> Carte 1</button>
            <button :style="{backgroundColor: btn2 === true ? 'pink':'green' }" @click="switchStyle2()"> Carte 2</button>
        </div>
        <div class="updateStyle">
            <button :class="['btn', {changeClass1: btn3 }]" @click="switchClass1()"> Carte 1</button>
            <button  :class="['btn', {changeClass2: btn4 }]" @click="switchClass2()"> Carte 2</button>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

let btn1 = ref(true);
let btn2 = ref(true);
let btn3 = ref(true);
let btn4 = ref(true);

function switchStyle1(){
    btn1.value = !btn1.value;
}
function switchStyle2(){
    btn2.value = !btn2.value;
}
function switchClass1(){
    btn3.value = !btn3.value;
}
function switchClass2(){
    btn4.value = !btn4.value;
}
</script>

<style scoped lang="css">
.updateStyle{
    display: flex;
    margin: 10px;
    border-radius: 10px;
}
button{
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}

.changeClass1{
    background-color: green;
    border-radius: 10px;
}
.changeClass2{
    background-color: rgb(73, 62, 175);
    border-radius: 10px;
}
</style>