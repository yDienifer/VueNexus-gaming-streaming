<template>
    <div class="registrationLoginFormContainer" v-if="registrationLoginFormVisible">
        <RouterLink to="/home" @click.prevent="goBackToHome">
            <i class="fa-sharp fa-solid fa-xmark" ref="closeFormIcon"></i>
        </RouterLink>
        <form>
            <h1>Create your account now and <span>win exclusive Valorant rewards</span> through our <span>giveaways and
                    competitions!</span></h1>
            <input id="username" name="username" type="text" placeholder="Create a unique username" :maxlength="16"
                required>
            <input id="email" name="email" placeholder="Enter your email here" type="email" required>
            <input ref="Puiid" id="valorantPuuid" name="valorantPuuid" placeholder="What's your Valorant PUUID?" type="text"
                :maxlength="32">
            <input id="password" name="password" type="password" placeholder="Create a secure password" :maxlength="8"
                required>
            <ResizingButton id="btn" titulo-introdutorio-do-btn="Start my journey" />
            <span id="login">Are you already a member?</span>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

import ResizingButton from "../../components/resizing_button/ResizingButton.vue";

export default defineComponent({
    name: "RegistrationLoginForm",
    components: {
        ResizingButton
    },
    setup() {
        const router = useRouter();

        const goBackToHome = () => router.push('/home');

        const registrationLoginFormVisible = ref(true);

        // Close form button ------------------------------------- //
        const closeFormIcon = ref<HTMLElement | null>(null);
        const closeForm = () => {
            registrationLoginFormVisible.value = false;
        };

        onMounted(() => {
            closeFormIcon.value?.addEventListener("click", closeForm);
            nextTick(() => {
                closeFormIcon.value?.addEventListener("click", () => {
                    registrationLoginFormVisible.value = false;
                });
            });
        });

        return {
            registrationLoginFormVisible,
            closeFormIcon,
            goBackToHome
        }
    },
});
</script>
  
<style scoped>
.registrationLoginFormContainer {
    align-items: center;
    background-color: #fff;
    background-image: url(/public/static/img/banner/Skye_KeyArt_PR_2.jpg);
    background-size: 180%;
    border-radius: 5px;
    display: flex;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9;
}

.registrationLoginFormContainer form {
    background-color: #fff;
    border-radius: 5px;
    display: block;
    margin-left: 8%;
    padding: 40px 30px;
    width: 35%;
}

.registrationLoginFormContainer h1,
.registrationLoginFormContainer span {
    color: #000000;
    font-size: clamp(14px, 3vw, 24px);
    margin-bottom: 30px;
    width: 100%;
}

.registrationLoginFormContainer i {
    cursor: pointer;
    font-size: 24px;
    margin-left: 15px;
    position: absolute;
    z-index: 2;
}

#login {
    color: #7a7a7a;
    cursor: pointer;
    font-size: clamp(10px, 3vw, 14px);
    margin-bottom: 0;
    margin-top: 10px;
}

.registrationLoginFormContainer input {
    border: 1px solid #2C3E50;
    border-radius: 3px;
    color: #2C3E50;
    font-size: clamp(12px, 3vw, 14px);
    margin-bottom: 10px;
    padding: 10px;
    transition: 0.2s ease-out;
    width: 100%;
}

.registrationLoginFormContainer input:focus {
    border: 1px solid var(--cor-folly);
}

li {
    color: #000000;
    margin-top: 5px;
}

@media (max-width: 768px) {
    .registrationLoginFormContainer {
        background-repeat: no-repeat;
        background-size: 220%;
    }

    .registrationLoginFormContainer form {
        width: 55%;
    }
}

@media (max-width: 425px) {
    .registrationLoginFormContainer {
        background-position: -350px 0;
        background-repeat: no-repeat;
        background-size: 450%;
    }

    .registrationLoginFormContainer form {
        bottom: 10px;
        left: 50%;
        margin: 0;
        padding: 30px;
        position: absolute;
        transform: translate(-50%);
        width: 90%;
    }

    .registrationLoginFormContainer i {
        font-size: 24px;
        left: 50%;
        margin-left: 0;
        position: absolute;
        top: 10px;
    }
}
</style>