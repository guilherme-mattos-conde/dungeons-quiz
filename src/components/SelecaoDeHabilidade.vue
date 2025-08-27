<template>
    <section id="selecionar-habilidade">
        <div id="titulo">
            <h2>Selecione sua Habilidade</h2>
            <h2>{{ jogador.getNome() }}</h2>
        </div>
        <div id="selecao-habilidade">
            <img class="img-personagem" :src="'/images/personagens/' + jogador.getPersonagem().getImg()"
                alt="Imagem do personagem" />
            <div class="habilidades">
                <h3>Habilidades</h3>
                <ul>
                    <li v-for="habilidade in jogador.getPersonagem().getHabilidades()">
                        <img :src="'/images/habilidades/' + habilidade.getImg()" :alt="'Imagem ' + habilidade.getNome()"
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

#selecao-habilidade {
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 750px;
    margin-bottom: 25px;

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
</style>