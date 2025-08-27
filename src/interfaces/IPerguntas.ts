import type { Dificuldade } from "@/types";
import type { Pergunta } from "@/classes/Pergunta";

export interface IPerguntas {
    buscarPerguntaNaoRespondidaPorDificuldade(dificuldade: Dificuldade): Pergunta;
}
