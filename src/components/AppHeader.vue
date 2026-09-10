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