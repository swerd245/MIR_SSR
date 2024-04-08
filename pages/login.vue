<template>
    <h1>로그인</h1>
    <form @submit="handleLogin">
        <input type="text" v-model="userDataState.loginUserId" />
        <input type="password" v-model="userDataState.loginUserPassword" />
        <button type="submit">로긴</button> 
    </form>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import JSEncrypt from "jsencrypt";
interface IUserDataState {
    loginUserId: string;
    loginUserPassword: string;
}

interface ILoginData {
    gameCode: string;
    id: string;
    password: string;
}

const useConfig : any = useRuntimeConfig();
const authStore = useAuthStore();

const userDataState : IUserDataState = reactive({
    loginUserId: "", 
    loginUserPassword: "" 
});

const handleLogin: (e : any) => void = (e) => {
    e.preventDefault();
    const enc = new JSEncrypt();
    const publicKey : string | undefined = useConfig.public.publicKey;

    if (publicKey) enc.setPublicKey(publicKey);
    const encryptedPassword = enc.encrypt(userDataState.loginUserPassword);
    const password: string = typeof encryptedPassword === 'string' ? encryptedPassword : "";
    
    const user : ILoginData = {
        gameCode : "2",
        id : userDataState.loginUserId,
        password
    };
    
    authStore.setUserLogin(user);
};


</script>