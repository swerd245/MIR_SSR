<template>
    <header class="header">
        <!-- <div class="header-left">
            <button type="button" class="mir-service-menu" @click="onHamburgerChange(true)">
                <span class="hamberger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </button>
            <h1 class="logo">
                <router-link :to="{ name: 'Home' }">
                    <img :src="`${cdn}/bi.png`" alt="bi" />
                </router-link>
            </h1>
        </div>
        <nav class="gnb-wrap">
            <ul class="gnb-list">
                <li class="gnb-item" v-for="depth1 in nav" :key="depth1">
                    <router-link class="gnb-item-title" :to="{ name: depth1.routerName }">{{
                        depth1.title
                    }}</router-link>
                    <ul class="gnb-detail-list">
                        <li v-for="depth2 in depth1.depth2" :key="depth2">
                            <router-link :to="{ name: depth2.routerName }">{{
                                depth2.title
                            }}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="header-right">
            <div class="login-wrap" v-if="!isAuthenticated">
                <RouterLink :to="{ name: 'Login' }">
                    <img
                        :src="`${cdn}/components/layout/header/ico-mypage.png`"
                        alt="mypage icon"
                    />
                    로그인
                </RouterLink>
            </div>
            <div class="login-status" v-else>
                <RouterLink :to="{ name: 'InquiryList' }" class="go-inquiry">
                    <span class="inquiry-text">1:1문의내역</span>
                    <span
                        class="inquiry-detail-number"
                        v-if="$store.state.userData.inquiryCount > 0"
                    >
                        {{ $store.state.userData.inquiryCount }}
                    </span>
                </RouterLink>
                <router-link :to="{ name: 'Member' }" class="mypage-button" type="button">
                    <img
                        :src="`${cdn}/components/layout/header/ico-mypage.png`"
                        alt="mypage icon"
                    />
                </router-link>
                <button @click="handleMovePageLogout" class="logout-button" type="button">
                    <img
                        :src="`${cdn}/components/layout/header/icon_power.png`"
                        alt="mypage icon"
                    />
                </button>
            </div>
            <a href="#" class="game-link">
                <span class="go">게임홈페이지 바로가기</span>
            </a>
        </div> -->
        <!-- <HamburgerMenu :hamburgerStatus="hamburgerStatus" @changeStatus="changeStatus" /> -->
    </header>
</template>

<script setup lang="ts">

</script>