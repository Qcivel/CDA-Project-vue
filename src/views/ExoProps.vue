<template>
    <NewFriend @addFriend="creatFriend"/>

    <div>
        <OneFriend v-for="value in lesAmis" :id=value.id :title=value.name :telephone=value.phone :email=value.email :premium=value.premium :key="value.id" @premium="onFriendsPremium" @deleteFriend="deleteMyFriend" />
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import OneFriend from '../components/OneFriend.vue';
import NewFriend from '../components/NewFriend.vue';


const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: false
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'yoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'ok',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'GUS',
        name: "GussDX",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);

function creatFriend(friend){
    
    lesAmis.value.push(friend);
    
}

function onFriendsPremium(id){
    const ami = lesAmis.value.find(e => e.id === id);
    
    ami.premium = !ami.premium;
   
}
function deleteMyFriend(id){
    const ami = lesAmis.value.find(e => e.id === id);
    console.log(ami);
    
    lesAmis.value.splice(id,1);
   
}


</script>
<style scoped lang="css">

</style>