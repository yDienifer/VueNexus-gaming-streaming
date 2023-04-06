<template>
    <aside class="menu-lateral-container">
        <section class="secao-descubra">
            <span>Discover</span>
            <ul class="atalhos-da-secao">
                <li><a href="#"><i class="fa-solid fa-tv"></i>Popular streams</a></li>
                <li><a href="#"><i class="fa-solid fa-person-rifle"></i>Recommended streamers</a></li>
                <li><a href="#"><i class="fa-solid fa-newspaper"></i>Newest updates</a></li>
                <li><a href="#"><i class="fa-regular fa-calendar-days"></i>Live events</a></li>
            </ul>
        </section>
        <section class="secao-forum-da-comunidade">
            <span>Community Forum</span>
            <ul class="atalhos-da-secao">
                <li><i class="fa-solid fa-chess"></i><a href="#">Strategies and Tactics</a></li>
                <li><i class="fa-solid fa-comment-dots"></i><a href="#">Feedback and Suggestions</a></li>
                <li><i class="fa-solid fa-hammer"></i><a href="#">Community and Events</a></li>
            </ul>
        </section>
        <section class="secao-guias-de-jogo">
            <span>Game Guides</span>
            <ul class="atalhos-da-secao">
                <li><i class="fa-solid fa-book-open"></i><a href="#">Beginner's Guide</a></li>
                <li><i class="fa-solid fa-thumbs-up"></i><a href="#">Advanced Tips</a></li>
                <li><i class="fa-solid fa-user-ninja"></i><a href="#">Agent Guides</a></li>
                <li><i class="fa-solid fa-trophy"></i><a href="#">Achievements and Rewards</a></li>
            </ul>
        </section>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MenuLateral",
})

</script>

<style scoped>
.menu-lateral-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    position: absolute;
    margin-top: 20px;
    left: 5px;
    height: 100%;
    float: left;
    padding: 0 25px;
}

.menu-lateral-container::before {
    border-radius: 10px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20, 20, 20, 0.968);
    z-index: -1;
}

.menu-lateral-container::after {
    border-radius: 10px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/public/static/img/banner/banner.png);
    background-position-x: 1300px;
    /* background-position-x: 258px; */
    z-index: -2;
}

.atalhos-da-secao i {
    margin: 15px 5px 0 0;
}

.atalhos-da-secao li {
    font-size: clamp(14px, 2vw, 15px);
}

section .atalhos-da-secao:nth-of-type(1),
section .atalhos-da-secao:nth-of-type(2) {
    border-bottom: 1px solid #7d7d7d5a;
    padding-bottom: 20px;
}

/* Configurações gerais */
section {
    margin-top: 25px;
}

i {
    color: var(--cor-folly);
}

span {
    color: gray;
    cursor: cell;
    width: 0;
    position: relative;
}

span::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--cor-folly);
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
}

span:hover::after {
    transform-origin: left;
    transform: scaleX(100%);
}

@media (max-width: 768px) {
    .menu-lateral-container {
        display: none;
    }
}

@media (max-width: 425px) {

    .menu-lateral-container {
        display: none;
    }
}
</style>
