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
    max-width: 1000px;
    gap: 1rem;
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
        flex-grow: 1;
        justify-content: space-around;
        gap: 1rem;
        flex-basis: 50%;
        flex-wrap: wrap;
    }

    .alternativa {
        font-size: 12pt;
        width: 200px;
        height: auto;
        
        background-color: rgb(127, 21, 21);
        color: white;
        border: 2px solid black;
        opacity: 90%;
        border-radius: 10px;
        transition: .5s;
    }

    .alternativa:hover {
        opacity: 100%;
        cursor: pointer;
        border: 2px solid black
    }
}

@media (max-width: 1250px) {
    #caixa-de-pergunta {
        #texto-pergunta {
            font-size: 13pt;
            width: 400px;
        }

        #alternativas {  
            gap: 1rem;
            width: 400px;
        }

        .alternativa {
            font-size: 11pt;
            min-height: 35px;
            width: 150px;
        }
    }
}

@media (max-width: 950px) {
    #caixa-de-pergunta {
        width: 80%;
        align-items: center;
        height: auto;
        flex-direction: column;

        #texto-pergunta {
            font-size: 13pt;
            width: 90%;
        }

        #alternativas {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .alternativa {
            font-size: 11pt;
            min-height: 35px;
            width: 100%;
        }
    }
}
</style>