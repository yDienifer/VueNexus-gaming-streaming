<script setup lang="ts"></script>

<template>
    <div class="bannerContainer">
        <div class="bannerBackground"></div>
    </div>
</template>

<script lang="ts">
export default {
    name: "BannerDoSite",
}
</script>

<style scoped>
.bannerContainer {
    position: relative;
    width: 100vw;
    height: 100vw;
}

.bannerContainer .bannerBackground {
    background-image: url(/public/static/img/banner/banner.png);
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.7;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vw;
}
</style>