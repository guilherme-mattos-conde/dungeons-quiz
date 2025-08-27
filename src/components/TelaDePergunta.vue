<template>
    <section id="tela-pergunta">
        <div id="titulo">
            <h2>Turno do {{ jogadorAtacante.getNome() }}</h2>
        </div>
        <div id="batalha">
            <div class="personagem personagem-atacante">
                <img :src="'/images/personagens/' + jogadorAtacante.getPersonagem().getImg()"
                    alt="Imagem do personagem" />
                <div class="atributos-do-personagem">
                    <p class="nome">{{ jogadorAtacante.getNome() }}</p>
                    <p class="vida">❤️ {{ jogadorAtacante.getPersonagem().getVida() }}</p>
                </div>
                
            </div>
            <span>VS</span>
            <div class="personagem personagem-atacado">
                <div class="atributos-do-personagem">
                    <p class="nome">{{ jogadorAtacado.getNome() }}</p>
                    <p class="vida">❤️ {{ jogadorAtacado.getPersonagem().getVida() }}</p>
                </div>
                <img :src="'/images/personagens/' + jogadorAtacado.getPersonagem().getImg()"
                    alt="Imagem do personagem" />
            </div>
        </div>

        <div id="caixa-de-dialogo">
            <CaixaDePergunta :pergunta="pergunta" v-if="caixaDeDialogo === 'pergunta'" @avancar="verificarResposta"/>
            <FeedbackResposta :respostaEstaCorreta="true" v-else-if="caixaDeDialogo === 'resposta-correta'" @avancar="emit('avancar')"/>
            <FeedbackResposta :respostaEstaCorreta="false" v-else-if="caixaDeDialogo === 'resposta-incorreta'" @avancar="emit('avancar')"/>
            <CaixaDeVitória :jogadorAtacante="jogadorAtacante" v-else-if="caixaDeDialogo === 'vitoria'" @avancar="emit('finalizar')"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

import type { CaixaDeDialogo } from "@/types";
import type { IJogador } from "@/interfaces/IJogador";
import type { IPerguntas } from "@/interfaces/IPerguntas";

import { Pergunta } from "@/classes/Pergunta";

import CaixaDePergunta from "@/components/caixa-de-exibicao/CaixaDePergunta.vue";
import FeedbackResposta from "@/components/caixa-de-exibicao/FeedbackResposta.vue";
import CaixaDeVitória from "@/components/caixa-de-exibicao/CaixaDeVitoria.vue";

const emit = defineEmits(["avancar", "finalizar"]);

const props = defineProps<{
    jogadorAtacante: IJogador,
    jogadorAtacado: IJogador,
    perguntas: IPerguntas,
}>();

const caixaDeDialogo = ref<CaixaDeDialogo>('pergunta')
const pergunta = ref<Pergunta>(carregarPergunta());

function carregarPergunta() {
    const dificuldade = props.jogadorAtacante.getPersonagem().getHabilidadeSelecionada().getDificuldadePergunta();
    return props.perguntas.buscarPerguntaNaoRespondidaPorDificuldade(dificuldade);
}

function verificarResposta(alternativaSelecionada: string) {
    pergunta.value.marcarComoRespondida();

    if (pergunta.value.verificarResposta(alternativaSelecionada)) {
        props.jogadorAtacante.getPersonagem().atacar(props.jogadorAtacado.getPersonagem());
        caixaDeDialogo.value = props.jogadorAtacado.getPersonagem().estaVivo() ? 'resposta-correta' : 'vitoria';
    } else {
        caixaDeDialogo.value = 'resposta-incorreta';
    }
}
</script>

<style scoped>
#tela-pergunta {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url('/images/fundo-tela-pergunta.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

#titulo {
    text-align: center;
    margin: 20px 0;
    font-size: 20pt;
    color: white;
}

#batalha {
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: 20px 0;

    .personagem {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 25px;

        img {
            width: 280px;
        }

        .atributos-do-personagem {
            font-size: 20pt;
            color: white;
            margin: 10px 20px;
        }
    }

    .personagem-atacante .atributos-do-personagem{
        text-align: left;
    }

    .personagem-atacado .atributos-do-personagem{
        text-align: right;
    }

    span {
        font-size: 50pt;
        color: white;
    }
}

#caixa-de-dialogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    gap: 2rem;
}
</style>