import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: ()=> import("../views/Home.vue")
        },
        {
            path: "/about",
            name:"About",
            component: ()=> import("../views/About.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: ()=> import("../views/Contact.vue")
        },
        {
            path: "/cookie",
            name:"cookie",
            component: ()=> import("../views/Cookies.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notfound",
            component: ()=> import("../views/NotFound.vue")
        },
        {
            path: "/textInterpolation",
            name: "notfound",
            component: ()=> import("../views/TextInterpolation.vue")
        },
        {
            path: "/vBind",
            name: "vBind",
            component: ()=> import("../views/VBind.vue")
        },
        {
            path: "/eventBinding",
            name: "eventBinding",
            component: ()=> import("../views/EventBinding.vue")
        },
        {
            path: "/dynamicStyling",
            name: "dynamicStyling",
            component: ()=> import("../views/DynamicStyling.vue")
        },
        {
            path: "/watchList",
            name: "watchList",
            component: ()=> import("../views/WatchList.vue")
        },
        {
            path: "/cycleDeVie",
            name: "cycleDeVie",
            component: ()=> import("../views/CycleDeVie.vue")
        },
        {
            path: "/compteurWatcher",
            name: "compteurWatcher",
            component: ()=> import("../views/CompteurWatcher.vue")
        },
        {
            path: "/formLogin",
            name: "formLogin",
            component: ()=> import("../views/FormLogin.vue")
        },
        {
            path: "/profiles",
            name: "profiles",
            component: ()=> import("../views/ProfilListView.vue")
        },
        {
            path: "/profiles/:id",
            name: "profile-detail",
            component: ()=> import("../views/ProfileDetail.vue")
        },
        {
            path: "/catalogueProduit",
            name: "catalogueProduit",
            component: ()=> import("../views/CatalogueProduit.vue")
        },
    ]
});
export default router;