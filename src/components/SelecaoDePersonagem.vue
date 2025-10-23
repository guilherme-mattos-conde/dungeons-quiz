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
                <div id="container-img-personagem">
                    <img class="img-personagem-selecionado" :src="baseUrl + '/images/personagens/' + jogador.getPersonagem().getImg()" alt="Imagem do personagem" />
                </div>
                <div class="habilidades">
                    <h3>Habilidades</h3>
                    <ul>
                        <li v-for="habilidade in jogador.getPersonagem().getHabilidades()">
                            <img :src="baseUrl + '/images/habilidades/' + habilidade.getImg()" :alt="'Imagem ' + habilidade.getNome()" />
                        </li>
                    </ul>
                </div>
            </div>
            <div id="menu-personagens">
                <div class="personagem" v-for="personagem in personagens"
                    :class="{ selecionado: jogador.getPersonagem().getNome() === personagem.getNome() }"
                    @click="emit('update:personagem', jogador, personagem)">
                    <img :src="baseUrl + '/images/personagens/' + personagem.getImg()" :alt="'Imagem ' + personagem.getNome()" />
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

const baseUrl = import.meta.env.BASE_URL;

const personagens = [new Barbaro(), new Mago(), new Rainha(), new Mumia()];
</script>

<style scoped>
#selecionar-personagens {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    min-width: 100vw;
    width: 100%;
    background: url('/images/fundo-selecionar-personagens.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
#menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95vw;

    #titulo {
        font-size: 18pt;
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
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;

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
    align-items: spa;
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

@media (max-width: 950px) {
    #menu {
        #titulo {
            font-size: 10pt;
        }
        .btn {
            width: 100px;
        }
    }

    #selecao-personagens {
        gap: 1rem;
        margin: 1rem 0;

        .personagem-selecionado {
            display: flex;
            justify-content: start;
            width: 100%;
    
            #container-img-personagem {
                width: 50%;
            }
            .img-personagem-selecionado {
                width: 75%;
            }
        
            .habilidades {
                display: flex;
                flex-direction: column;
                width: 50%;
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

    #menu-personagens {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .personagem {
            width: 50%;
            margin-bottom: 1rem;
        }

        img {
            cursor: pointer;
            width: 75%;
            border: 2px solid transparent;
        }
        .selecionado {
            img {
                border: 2px solid white;
            }
        }
    }
}
</style>