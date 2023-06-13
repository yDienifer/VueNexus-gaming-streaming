<template>
    <article>
        <SiteBanner bannerTitle="Join the Action-Packed Livestreams" >
            <video autoplay muted loop>
                        <source src="public/static/video/LNY_Sage-5_CallBack.mp4" type="video/mp4" />
                    </video>
        </SiteBanner>
        <img src="../../../public/static/img/VALORANT_Jett.jpg" />
    </article>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import SiteBanner from "../../components/site_banner/SiteBanner.vue";

export default defineComponent({
    name: "Community",
    components: {
        SiteBanner
    },
})
</script>
  
<style scoped>
article {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100vw;
    z-index: 2;
}

article video {
    width: 100%;
    opacity: 0.4;
}
</style>