<template>
    <section id="tela-pergunta">
        <div id="titulo">
            <h2>Turno do {{ jogadorAtacante.getNome() }}</h2>
        </div>
        <main>
            <div id="batalha">
                <div class="personagem personagem-atacante">
                    <div id="container-img-personagem">
                        <img :src="baseUrl + '/images/personagens/' + jogadorAtacante.getPersonagem().getImg()"
                            alt="Imagem do personagem" />
                    </div>
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
                    <div id="container-img-personagem">
                        <img :src="baseUrl + '/images/personagens/' + jogadorAtacado.getPersonagem().getImg()"
                            alt="Imagem do personagem" />
                    </div>
                </div>
            </div>

            <CaixaDePergunta :pergunta="pergunta" v-if="caixaDeDialogo === 'pergunta'" @avancar="verificarResposta"/>
            <FeedbackResposta :respostaEstaCorreta="true" v-else-if="caixaDeDialogo === 'resposta-correta'" @avancar="emit('avancar')"/>
            <FeedbackResposta :respostaEstaCorreta="false" v-else-if="caixaDeDialogo === 'resposta-incorreta'" @avancar="emit('avancar')"/>
            <CaixaDeVitória :jogadorAtacante="jogadorAtacante" v-else-if="caixaDeDialogo === 'vitoria'" @avancar="emit('finalizar')"/>
        </main>
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

const baseUrl = import.meta.env.BASE_URL;

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

<style>
#tela-pergunta {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    min-width: 100vw;
    width: 100%;
    background: url('/images/fundo-tela-pergunta.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

#titulo {
    text-align: center;
    margin-top: 40px;
    font-size: 18pt;
    color: white;
}

main {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
}

#batalha {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    max-width: 1000px;

    .personagem {
        display: flex;
        justify-content: center;
        align-items: flex-start;

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

@media (max-width: 1250px) {
    #batalha {
        .personagem {
            img {
                width: 200px;
            }

            .atributos-do-personagem {
                font-size: 16pt;
            }
        }

        span {
            font-size: 40pt;
        }
    }
}

@media (max-width: 950px) {
    #titulo {
        font-size: 16pt;
    }
    
    #batalha {
        width: 90%;

        .personagem {
            width: 35%;
            flex-direction: column;
            
            #container-img-personagem {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            img {
                width: 100%;
            }

            .atributos-do-personagem {
                font-size: 13pt;
                margin: 10px 0;
                width: 100%;
            }
        }

        .personagem-atacado {
            flex-direction: column-reverse;

            .atributos-do-personagem {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
        }

        span {
            font-size: 20pt;
        }
    }
}
</style>