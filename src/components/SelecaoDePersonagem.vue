<template>
    <section id="selecionar-personagens">
        <header id="menu">
            <a @click="emit('voltar')"><img class="btn" src="/images/btn-voltar.png" alt=""></a>
            <div id="titulo">
                <h2>Selecione seu Personagem</h2>
                <h2>{{ jogador.getNome() }}</h2>
            </div>
            <a @click="emit('avancar')"><img class="btn" src="/images/btn-avancar.png" alt=""></a>
        </header>
        <div id="selecao-personagens">
            <div class="personagem-selecionado">
                <img class="img-personagem-selecionado" :src="'/images/personagens/' + jogador.getPersonagem().getImg()" alt="Imagem do personagem" />
                <div class="habilidades">
                    <h3>Habilidades</h3>
                    <ul>
                        <li v-for="habilidade in jogador.getPersonagem().getHabilidades()">
                            <img :src="'/images/habilidades/' + habilidade.getImg()" :alt="'Imagem ' + habilidade.getNome()" />
                        </li>
                    </ul>
                </div>
            </div>
            <div id="menu-personagens">
                <div class="personagem" v-for="personagem in personagens"
                    :class="{ selecionado: jogador.getPersonagem().getNome() === personagem.getNome() }"
                    @click="emit('update:personagem', jogador, personagem)">
                    <img :src="'/images/personagens/' + personagem.getImg()" :alt="'Imagem ' + personagem.getNome()" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { IJogador } from "@/interfaces/IJogador";

import { Barbaro } from "@/classes/Personagens/Barbaro";
import { Mago } from "@/classes/Personagens/Mago";
import { Rainha } from "@/classes/Personagens/Rainha";
import { Mumia } from "@/classes/Personagens/Mumia";

const emit = defineEmits(['voltar', 'avancar', 'update:personagem']);

defineProps<{
  jogador: IJogador
}>();

const personagens = [new Barbaro(), new Mago(), new Rainha(), new Mumia()];
</script>

<style scoped>
#selecionar-personagens {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url('/images/fundo-selecionar-personagens.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
#menu {
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    width: 95vw;
    margin: 20px 0;

    #titulo {
        font-size: 20pt;
        color: white;
    }

    .btn {
        width: 180px;
    }
    .btn:hover {
        cursor: pointer;
    }
}
#selecao-personagens {
    margin-top: 10px;

    .personagem-selecionado {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 750px;
        margin-bottom: 25px;
    
        .img-personagem-selecionado {
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
            img {
                width: 320px;
            }
        }
    }
}
#menu-personagens {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        cursor: pointer;
        width: 130px;
        border: 2px solid transparent;
    }
    .selecionado {
        img {
            border: 2px solid white;
        }
    }
}
</style>