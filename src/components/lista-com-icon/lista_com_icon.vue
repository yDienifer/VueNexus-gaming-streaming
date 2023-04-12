<template>
    <ul class="atalhos-da-secao">
        <li v-for="(atalho, index) in atalhos" :key="atalho.id">
            <i :class="atalho.iconDoAtalho"></i> {{ atalho.nomeDoAtalho }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ListaComIcon",
    props: {
        atalhos: {
            type: Array as () => any[],
            required: true
        },
        iconDoAtalho: {
            type: String
        },
        nomeDoAtalho: {
            type: String
        }
    }
})
</script>

<style scoped>
.atalhos-da-secao i {
    margin: 15px 5px 0 0;
    color: var(--cor-folly);
}

.atalhos-da-secao li {
    font-size: clamp(14px, 2vw, 15px);
}

.atalhos-da-secao:nth-of-type(1) {
    border-bottom: 1px solid #7d7d7d5a;
    padding-bottom: 20px;
}
</style>