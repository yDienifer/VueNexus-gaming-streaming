<template>
    <div>
        <button>{{ tituloIntrodutorioDoBtn }}</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "botaoDeRedimensionamento",
    props: {
        tituloIntrodutorioDoBtn: {
            type: String,
            default: "Preview",
        }
    }
}
</script>

<style scoped>
button {
    background-color: var(--cor-folly);
    padding: 15px 0;
    width: 14.5em;
    border: none;
    font-size: clamp(12px, 3vw, 16px);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}


</style>