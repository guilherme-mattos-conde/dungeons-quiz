<template>
    <section id="vitoria">
        <h2>{{ jogadorAtacante.getNome() }} Venceu!</h2>
        <a @click="emit('avancar')"><img id="btn-finalizar" src="/images/btn-finalizar.png" alt="Finalizar"></a>
    </section>
</template>

<script lang="ts" setup>
import type { IJogador } from "@/interfaces/IJogador";

const emit = defineEmits(['avancar']);

defineProps<{
  jogadorAtacante: IJogador
}>();
</script>

<style>
#vitoria {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 300px;
    height: 120px;
    padding: 20px;
    border: 2px solid rgb(255, 225, 0);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.8);

    #btn-finalizar {
        cursor: pointer;
        height: 70px;
    }
}
</style>