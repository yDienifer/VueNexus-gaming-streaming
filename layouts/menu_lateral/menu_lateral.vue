<template>
    <aside class="menu-lateral-container">
        <section class="secao-descubra">
            <span>Discover</span>
            <ul class="descubra-atalhos">
                <li><a href="#"><i class="fa-solid fa-tv"></i>Popular streams</a></li>
                <li><a href="#"><i class="fa-solid fa-person-rifle"></i>Recommended streamers</a></li>
                <li><a href="#"><i class="fa-solid fa-newspaper"></i>Newest updates</a></li>
                <li><a href="#"><i class="fa-regular fa-calendar-days"></i>Live events</a></li>
            </ul>
        </section>
        <section class="secao-descubra">
            <span>Discover</span>
            <ul class="descubra-atalhos">
                <li><i class="fa-solid fa-tv"></i><a href="#">Popular streams</a></li>
                <li><i class="fa-solid fa-person-rifle"></i><a href="#">Recommended streamers</a></li>
                <li><i class="fa-solid fa-newspaper"></i><a href="#">Newest updates</a></li>
                <li><i class="fa-regular fa-calendar-days"></i><a href="#">Live events</a></li>
            </ul>
        </section>
    </aside>
</template>

<script lang="ts">
export default {
    name: "MenuLateral",
};
</script>

<style scoped>
.menu-lateral-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    position: absolute;
    top: 87px;
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
    /* Cor preta com opacidade de 0.5 */
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

.descubra-atalhos i {
    margin: 15px 5px 0 0;
}

.descubra-atalhos li {
    font-size: clamp(14px, 2vw, 15px);
}

.descubra-atalhos {
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
        padding: 0 15px;
    }

    .descubra-atalhos a {
        display: none;
    }

    .descubra-atalhos {
        padding: 0;
        margin: 0;
        border-bottom: none;
    }

    i {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    span {
        display: none;
    }
}
</style>
