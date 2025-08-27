<template>
    <section id="caixa-de-pergunta">
        <p id="texto-pergunta"><strong>Pergunta ({{ pergunta.getDificuldade() }}):</strong> {{ pergunta.getEnunciado() }}</p>
        <div id="alternativas">
            <button v-for="alternativa in alternativas" class="alternativa" @click="emit('avancar', alternativa)">
                {{ alternativa }}
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { IPergunta } from "@/interfaces/IPergunta";

const emit = defineEmits(['avancar']);

const props = defineProps<{
    pergunta: IPergunta;
}>();

const alternativas = computed(() => props.pergunta.getAlternativas());
</script>

<style>
#caixa-de-pergunta {
    display: flex;
    justify-content: space-between;
    width: 75vw;
    height: 120px;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;

    #texto-pergunta {
        font-size: 15pt;
        color: black;
        text-align: justify;
        width: 450px;
    }

    #alternativas {
        display: flex;
        width: 600px;
        justify-content: space-between;
        flex-basis: 50%;
        flex-wrap: wrap;
    }

    .alternativa {
        font-size: 12pt;
        min-width: 200px;
        height: 40px;
        cursor: pointer;
        background-color: rgb(127, 21, 21);
        color: white;
        border: 2px solid black;
        opacity: 90%;
        border-radius: 10px;
        transition: .5s;
    }

    .alternativa:hover {
        opacity: 100%;
        border: 2px solid black
    }
}
</style>