<template>
    <h1>Formulaire de connexion</h1>
    <form action="" @submit.prevent="checkSubmit">
        <label for=""> Nom d'utilisateur</label>
        <input class="input input-neutral" v-model="inputUser">
        <label for="email">Email :</label>
        <input class="input input-neutral" type="text" v-model="inputMail">
        <label for="psw">Mot de passe :</label>
        <input class="input input-neutral" type="password" v-model="inputPsw">
        <button class="btn btn-primary" type="submit" >Envoyer</button>
    </form>
    <p v-if="erreurMessage != ''">{{ erreurMessage }}</p>
    <p v-if="message !=''">{{ message }}</p>
    <p v-if="messagePsw !=''" :class='pswClass'>{{ messagePsw }}</p>
    <p v-if="messageAdmin !=''" >{{ messageAdmin }}</p>
    
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

let regexUserName = /[<>&"']/
let regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
let majRegex = /[A-Z]/;
let minRegex = /[a-z]/
let numberRegex = /[0-9]/ 
let inputUser = ref("");
let inputMail = ref("");
let inputPsw = ref("");
let erreurMessage = ref("");
let message = ref("");
let messagePsw = ref("");
let messageAdmin = ref("");
let desabelBtn = ref(true);
let nbrPsw = computed(()=>{
    return inputPsw.value.length;
});
let pswClass = ref("");
let passwordUser = "Mon mot de passe super sécurisé 0";
// Vérification du mot de passe

let verifPsw = computed(()=>{
    return comparePassword(inputPsw.value, passwordUser);
})

function checkSubmit(){
    let clean = inputUser.value.trim();

    if(clean.length < 3){
        erreurMessage.value = "Le nom d'utilisateur doit contenir au moins 3 caractères";
        message.value = "";
        return;
    } else if(regexUserName.test(inputUser.value)) {
        erreurMessage.value = "Le nom d'utilisateur contient des caractères non autorisé ";
        message.value = "";
        return;
    } else if(!regexMail.test(inputMail.value)){
        erreurMessage.value = "L'email n'est pas conforme !";
        message.value = "";
        return;
    } else if(inputPsw.value.length < 12){
        erreurMessage.value = "Le mot de passe doit contenir au mons 12 caractères"
        message.value = ""
        return;
    }else if(!majRegex.test(inputPsw.value)){
        erreurMessage.value = "Le mot de passe doit contenir au moins une majuscule";
        return;
    }else if(!minRegex.test(inputPsw.value)){
        erreurMessage.value = "Le mot de passe doit contenir au moins une minuscule";
        return;
    }else if(!numberRegex.test(inputPsw.value)){
        erreurMessage.value = "Le mot de passe doit contenir au un chiffre";
        return;
    }else if(verifPsw){
        messagePsw.value = "Les mots de passe correspondes !"
        
    }
    else{
        message.value = "Utilisateur connecté";
        
    }
    
    erreurMessage.value = "";
    console.log("UserName :" + inputUser.value);
}

function pswStrength(password){
    if(nbrPsw.value < 4){
        messagePsw.value = "Mots de passe très faible";
        pswClass.value = "text-error";
    }else if(nbrPsw.value < 8){
        messagePsw.value = "Mots de passe faible";
        pswClass.value = "text-warning";
    }else if(nbrPsw.value < 12){
        messagePsw.value = "Mots de passe moyen";
        pswClass.value = "text-info";
    }else{
        messagePsw.value = "Mots de passe fort";
        pswClass.value = "text-success";
    }
}

function checkAdmin(adminTest){
    if(adminTest.includes('admin')){
        messageAdmin.value = "Attention un champ contient le mot admin";
    }else{
        messageAdmin.value="";
    }
}
watch(inputPsw,(newValue)=>{
    pswStrength(newValue);
})

watch(inputUser,(newValue)=>{
    checkAdmin(newValue);
})
watch(inputMail,(newValue)=>{
    checkAdmin(newValue);
})
</script>

<style scoped lang="css">
</style>