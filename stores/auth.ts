export interface IUserData {
    userId: string;
    info : {
        accountIndex: number;
        birth: string;
        email: string;
        gameCode: number;
        id: string;
        ipinFlag: string;
        lastPasschgDate: string;
        loginIp: string;
        pageUrl: string;
        passchgDate: string;
        passchgDiff: string;
        passchgYn: string;
        refererUrl: string;
        scrRegDateDiff: string;
        secedeYn: string;
        sex: string;
        ssnoUid: number;
        userName: string;
    }
}

export interface ILoginData {
    id : string;
    password : string;
}


export const useAuthStore = defineStore("auth",{
    state: () => {
        return {
            userData : {
                userId : "",
                info : {
                    accountIndex: 0,
                    birth: "",
                    email: "",
                    gameCode: 2,
                    id: "",
                    ipinFlag: "2",
                    lastPasschgDate: "",
                    loginIp: "",
                    pageUrl: "",
                    passchgDate: "",
                    passchgDiff: "",
                    passchgYn: "",
                    refererUrl: "",
                    scrRegDateDiff: "0",
                    secedeYn: "N",
                    sex: "0",
                    ssnoUid: 0,
                    userName: ""
                },
            } as IUserData,
            isAuthenticated : false,
        }
    },
    getters:{
        getAuthenticated : (state) : Object => ({isAuthenticated : state.isAuthenticated}) ,
    },
    actions : {
        async setUserLogin(param : ILoginData){
            const runtimeConfig = useRuntimeConfig();
            try{
                // 타입수정 필요
                const response : any = await $fetch(`${runtimeConfig.public.baseUrl}/auth/signin/login`, {
                    method : "POST",
                    body: param
                });
                const res : any = response.data;

                if(res.code === "200"){
                    const { auth, info } = res.data;

                    if(auth.accessToken.length > 0 || auth.refreshToken.length > 0){
                        useCookie("his2", auth.id);
                        useCookie("mir2Acct", auth.accessToken);
                        useCookie("mir2Rfsh", auth.refreshToken);

                        this.userData.info = info;
                        this.userData.userId = auth.id;
                        this.isAuthenticated = true;
                        
                    }
                }

                console.log(response);
            } catch (error){
                console.error(error);
            }
        }
    }
});