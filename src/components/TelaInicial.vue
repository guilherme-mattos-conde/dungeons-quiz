<template>
    <section id="tela-inicial">
        <img id="titulo" src="/images/titulo.png" alt="">
        <a @click="emit('avancar')"><img id="btn-iniciar" src="/images/btn-iniciar.png" alt=""></a>
    </section>
</template>

<script setup lang="ts">
const emit = defineEmits(["avancar"]);
</script>

<style scoped>
#tela-inicial {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    height: 100vh;
    width: 100vw;
    background: url('/images/fundo-tela-inicial.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
#titulo {
    width: 800px;
}
#btn-iniciar {
    width: 400px;
}
#btn-iniciar:hover {
    cursor: pointer;
}
</style>
