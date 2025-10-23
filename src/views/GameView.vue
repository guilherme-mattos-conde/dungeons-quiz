<template>
    <Suspense>
        <template #default>
            <TelaInicial :perguntas="perguntas" v-if="tela === 'telaInicial'" @avancar="tela = 'selecaoDePersonagemJogador1'"/>
            <SelecaoDePersonagem :jogador="jogador1" v-else-if="tela === 'selecaoDePersonagemJogador1'"
            @update:personagem="atualizarPersonagem" @voltar="tela = 'telaInicial'" @avancar="tela = 'selecaoDePersonagemJogador2'"/>
            <SelecaoDePersonagem :jogador="jogador2" v-else-if="tela === 'selecaoDePersonagemJogador2'"
            @update:personagem="atualizarPersonagem" @voltar="tela = 'selecaoDePersonagemJogador1'" @avancar="tela = 'selecaoDeHabilidadeJogador1'"/>
            <SelecaoDeHabilidade :jogador="jogador1" v-else-if="tela === 'selecaoDeHabilidadeJogador1'"
            @update:habilidadeSelecionada="atualizarHabilidadeSelecionada" @avancar="tela = 'TelaDePerguntaJogador1'"/>
            <TelaDePergunta :jogadorAtacante="jogador1" :jogadorAtacado="jogador2" :perguntas="perguntas" v-else-if="tela === 'TelaDePerguntaJogador1'"
            @avancar="tela = 'selecaoDeHabilidadeJogador2'" @finalizar="iniciarNovoJogo"/>
            <SelecaoDeHabilidade :jogador="jogador2" v-else-if="tela === 'selecaoDeHabilidadeJogador2'"
            @update:habilidadeSelecionada="atualizarHabilidadeSelecionada" @avancar="tela = 'TelaDePerguntaJogador2'"/>
            <TelaDePergunta :jogadorAtacante="jogador2" :jogadorAtacado="jogador1" :perguntas="perguntas"v-else-if="tela === 'TelaDePerguntaJogador2'"
            @avancar="tela = 'selecaoDeHabilidadeJogador1'" @finalizar="iniciarNovoJogo"/>
        </template>
        <template #fallback>
            <div>Carregando...</div>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import type { Tela } from "@/types";

import { Personagem } from "@/classes/Personagem";
import { Habilidade } from "@/classes/Habilidade";
import { Jogador } from "@/classes/Jogador";
import { Perguntas } from "@/classes/Perguntas";

import TelaInicial from "@/components/TelaInicial.vue";
import SelecaoDePersonagem from "@/components/SelecaoDePersonagem.vue";
import SelecaoDeHabilidade from "@/components/SelecaoDeHabilidade.vue";
import TelaDePergunta from "@/components/TelaDePergunta.vue";

const jogador1 = ref<Jogador>(new Jogador(""));
const jogador2 = ref<Jogador>(new Jogador(""));
const perguntas = ref<Perguntas>(new Perguntas());

var tela = ref<Tela>('telaInicial');

async function iniciarNovoJogo() {
  jogador1.value = new Jogador("Jogador 1");
  jogador2.value = new Jogador("Jogador 2");
  perguntas.value = new Perguntas();
  await perguntas.value.carregarPerguntas();

  tela.value = "telaInicial";
}

function atualizarPersonagem(jogador: Jogador, novoPersonagem: Personagem) {
    jogador.setPersonagem(novoPersonagem);
}

function atualizarHabilidadeSelecionada(jogador: Jogador, novaHabilidade: Habilidade) {
    jogador.getPersonagem().setHabilidadeSelecionada(novaHabilidade)
}

onMounted(async () => {
    await iniciarNovoJogo()
});
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html, body {
    height: 100%;
    width: 100%;
}
</style>
