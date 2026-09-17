<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl"><RouterLink to="/">Mon super site trop cool de la mort qui tue</RouterLink></a>
        </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li>
                <details>
                    <summary>Pages</summary>
                        <ul class="bg-base-100 rounded-t-none p-2">
                            <li><a><RouterLink to="/">Home</RouterLink></a></li>
                            <li><a><RouterLink to="/About">About</RouterLink></a></li>
                            <li><a><RouterLink to="/Contact">Contact</RouterLink></a></li>
                            <li><a><RouterLink to="/Cookie">Cookie</RouterLink></a></li>
                            <li><a><RouterLink to="/NotFound">Not Found</RouterLink></a></li>
                        </ul>
                </details>
            </li>
        </ul>
    
        <ul class="menu menu-horizontal px-1">
            <li>
                <details>
                    <summary>Exercice</summary>
                        <ul class="bg-base-100 rounded-t-none p-2">
                            
                            <li><a><RouterLink to="/textInterpolation">Text Interpolation</RouterLink></a></li>
                            <li><a><RouterLink to="/VBind">La directive v-bind</RouterLink></a></li>
                            <li><a><RouterLink to="/eventBinding">TP Event Binding</RouterLink></a></li>
                            <li><a><RouterLink to="/dynamicStyling">TP Dynamic Styling</RouterLink></a></li>
                            <li><a><RouterLink to="/watchList">TP WatchList</RouterLink></a></li>
                            <li><a><RouterLink to="/cycleDeVie">TP Cycle de la vie</RouterLink></a></li>
                            <li><a><RouterLink to="/compteurWatcher">TP Compteur Watcher</RouterLink></a></li>
                            <li><a><RouterLink to="/formLogin">TP Formulaire de connexion</RouterLink></a></li>
                            <li><a><RouterLink to="/profiles">TP Liste des profils</RouterLink></a></li>
                            <li><a><RouterLink to="/catalogueProduit">TP Catalogue Produit</RouterLink></a></li>
                            <li><a><RouterLink to="/exoProps">TP Les props</RouterLink></a></li>
                            <li><a><RouterLink to="/firebaseArticleManager">Firebase Article Manager</RouterLink></a></li>
                            <li><a><RouterLink to="/countPinia">Count Pinia</RouterLink></a></li>
                            <li><a><RouterLink to="/taskManager">Eval Vue</RouterLink></a></li>
                        </ul>
                </details>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup lang='js'>


</script>

<style scoped lang="css">
summary{
    margin-right: 80px;
}
</style>