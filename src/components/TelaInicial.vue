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
    justify-content: center;
    gap: 2rem;
    min-height: 100vh;
    height: 100%;
    min-width: 100vw;
    width: 100%;
    background: url('/images/fundo-tela-inicial.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
#titulo {
    width: 750px;
}
#btn-iniciar {
    width: 400px;
}
#btn-iniciar:hover {
    cursor: pointer;
}

@media (max-width: 950px) {
    #titulo {
        width: 95%;
    }
    #btn-iniciar {
        width: 60%;
    }
}
</style>
