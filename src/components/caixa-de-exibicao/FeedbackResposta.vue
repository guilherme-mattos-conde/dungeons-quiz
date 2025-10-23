<template>
    <section id="feedback-resposta" :class="respostaEstaCorreta ? 'resposta-correta' : 'resposta-incorreta'">
        <h2>Resposta {{ respostaEstaCorreta ? 'Correta' : 'Incorreta'}}!</h2>
        <a @click="emit('avancar')"><img id="btn-proximo-turno" src="/images/btn-proximo-turno.png" alt="Próximo Turno"></a>
    </section>
</template>

<script setup lang="ts">
const emit = defineEmits(['avancar']);

defineProps({
    respostaEstaCorreta: {
        type: Boolean,
        required: true
    }
});
</script>

<style>
#feedback-resposta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 300px;
    height: 120px;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.8);

    #btn-proximo-turno {
        height: 80px;
    }

    #btn-proximo-turno:hover {
        cursor: pointer;
    }
}

.resposta-correta {
    border: 2px solid rgb(39, 185, 39);
}

.resposta-incorreta {
    border: 2px solid red;
}
</style>