<template>
    <section id="selecionar-habilidade">
        <div id="titulo">
            <h2>Selecione sua Habilidade</h2>
            <h2>{{ jogador.getNome() }}</h2>
        </div>
        <div id="selecao-habilidade">
            <div id="container-img-personagem">
                <img class="img-personagem" :src="baseUrl + '/images/personagens/' + jogador.getPersonagem().getImg()"
                    alt="Imagem do personagem" />
            </div>
            <div class="habilidades">
                <h3>Habilidades</h3>
                <ul>
                    <li v-for="habilidade in jogador.getPersonagem().getHabilidades()">
                        <img :src="baseUrl + '/images/habilidades/' + habilidade.getImg()" :alt="'Imagem ' + habilidade.getNome()"
                        @click="avancar(habilidade)" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { IJogador } from "@/interfaces/IJogador";

import { Habilidade } from "@/classes/Habilidade";

const emit = defineEmits(["avancar", "update:habilidadeSelecionada"]);

const props = defineProps<{
  jogador: IJogador
}>();

const baseUrl = import.meta.env.BASE_URL;

function avancar(habilidade: Habilidade) {
    emit('update:habilidadeSelecionada', props.jogador, habilidade)
    emit('avancar')
}
</script>

<style scoped>
#selecionar-habilidade {
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

#selecao-habilidade {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    width: 750px;
    margin: 2rem 0;

    .img-personagem {
        width: 280px;
    }

    .habilidades {
        h3 {
            font-size: 25pt;
            color: white;
        }

        ul {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            gap: 1rem;
            list-style: none;
        }

        li:hover {
            cursor: pointer;
        }

        img {
            width: 320px;
        }
    }
}

@media (max-width: 950px) {
    #titulo {
        font-size: 10pt;
    }

    #selecao-habilidade {
        flex-direction: column;
        width: 100%;
        gap: 1rem;

        .img-personagem {
            width: 65%;
        }
    
        .habilidades {
            display: flex;
            flex-direction: column;
            width: 75%;
            h3 {
                font-size: 15pt;
            }
            ul {
                margin-top: 1rem;
            }
            img {
                width: 80%;
            }
        }
    }
}
</style>