<template>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Valeur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>unLivre</td>
                        <td>{{ unLivre }}</td>
                    </tr>
                    <tr>
                        <td>isOnline</td>
                        <td>{{ isOnline }}</td>
                    </tr>
                    <tr>
                        <td>unNombre</td>
                        <td>{{ unNombre }}</td>
                    </tr>
                    <tr>
                        <td>unTableau</td>
                        <td>{{ unTableau }}</td>
                    </tr>
                    <tr>
                        <td>unTableau</td>
                        <td>{{ unTableau0 }}</td>
                    </tr>
                    <tr>
                        <td>unObjet.name</td>
                        <td>{{ unObjet.name }}</td>
                    </tr>
                    <tr>
                        <td>unObjet.tel</td>
                        <td>{{ unObjet.tel }}</td>
                    </tr>
                    <tr>
                        <td>fonctionTest()</td>
                        <td>{{ fonctionTest() }}</td>
                    </tr>
                    <tr>
                        <td>ternaire('Cool')</td>
                        <td>{{ ternaire('Cool') }}</td>
                    </tr>
                    <tr>
                        <td>On affiche du HTML ? </td>
                        <td>{{ textHtml }}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const unLivre = ref("Steven Seagal");
const isOnline = ref(true);
const unNombre = ref(8888);
const unTableau = [1,3,5];
const unTableau0 = unTableau[0];
const unObjet = {'name':"Cool", 'tel': '060503030'};
const fonctionTest = () =>{
    return 'Hello World';
}
const ternaire = (cool)=> {
    return cool==="Cool" ? "Cool" : "Pas Cool" ;
}
const textHtml= '<h1>Du Html</h1>';
</script>
<style scoped lang="css">
</style>