<template>
    <div class="bannerContainer">
        <slot></slot>
        <div id="bannerBackground"></div>
        <div class="bannerContent">
            <h1>{{ bannerTitle }}</h1>
            <ResizingButton class="resizingButton" introductory-button-title="Get in on the Action" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from "gsap";

import ResizingButton from "../resizing_button/ResizingButton.vue";

export default defineComponent({
    name: "SiteBanner",
    components: {
        ResizingButton,
    },
    props: {
        bannerTitle: {
            type: String,
        }
    },
    mounted() {
        gsap.from(".bannerContainer", {
            duration: 1.5,
            opacity: 0,
            ease: "slow(0.4, 0.7, false)",
            x: 100,
        });
        gsap.from(".bannerContent", {
            duration: 1.5,
            opacity: 0,
            x: 100,
        });
    },
})
</script>

<style scoped>
.bannerContainer {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    z-index: 1;
}

.bannerContent {
    backdrop-filter: blur(1.5px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(242, 68, 100, 0.308);
    left: 60%;
    max-width: 750px;
    padding: 30px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: 1;
}

.bannerContent h1 {
    color: white;
    font-family: "League Gothic", sans-serif;
    font-size: clamp(2rem, 5vw, 5rem);
    text-transform: uppercase;
    width: 90%;
}

.resizingButton {
    margin-top: 15px;
    width: 50%;
}

@media (max-width: 1024px) {
    .bannerContainer {
        width: 70vw;
    }
}

@media (max-width: 768px) {
    .bannerContainer {
        width: 98vw;
    }
}

@media (max-width: 425px) {
    .bannerContainer {
        height: 100vw;
        top: 0;
        width: 100vw;
    }

    #bannerBackground {
        background-image: url(/public/static/img/banner/banner.png);
        background-position: -200px 0;
        background-repeat: no-repeat;
        background-size: 310%;
        border-radius: 0;
        filter: grayscale(0.2);
        height: 950px;
        opacity: 0.6;
        position: absolute;
        width: 100vw;
        z-index: -1;
    }

    .bannerContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px 0 0 10px;
        padding: 30px 10px 10px 20px;
    }

    video {
        display: none;
    }
}

@media (max-width: 425px) {
    .bannerContainer {
        margin-top: 0;
    }
}
</style>