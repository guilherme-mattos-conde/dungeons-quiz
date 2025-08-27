import { Pergunta } from "./Pergunta";
import type { Dificuldade } from "@/types";

import { obterPerguntas } from "@/services/obterPerguntas";

export class Perguntas {
    private perguntas: Pergunta[] = [];

    async carregarPerguntas() {
        const dados = await obterPerguntas();
        this.perguntas = dados.map((pergunta: any) =>
            new Pergunta(pergunta.enunciado, pergunta.alternativas, pergunta.alternativaCorreta, pergunta.dificuldade)
        );
    }
    
    buscarPerguntaNaoRespondidaPorDificuldade(dificuldade: Dificuldade): Pergunta {
        const perguntasFiltradasPorDificuldade = this.perguntas.filter(pergunta => pergunta.getDificuldade() === dificuldade);

        const perguntasFiltradasNaoRespondidas = perguntasFiltradasPorDificuldade.filter(pergunta => !pergunta.foiRespondida());

        if(perguntasFiltradasNaoRespondidas.length === 0) {
            this.resetarPerguntasRespondidasPorDificuldade(dificuldade);
            return this.buscarPerguntaNaoRespondidaPorDificuldade(dificuldade);
        }

        const indiceAleatorio = Math.floor(Math.random() * perguntasFiltradasNaoRespondidas.length);

        return perguntasFiltradasNaoRespondidas[indiceAleatorio];
    }

    private resetarPerguntasRespondidasPorDificuldade(dificuldade: Dificuldade) {
        this.perguntas.forEach(pergunta => {
            if (pergunta.getDificuldade() === dificuldade && pergunta.foiRespondida()) {
                pergunta.resetarResposta();
            }
        });
    }
}
