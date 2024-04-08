export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path !== "/"){
        console.log("not main page");
        // return navigateTo("/");
    }
})