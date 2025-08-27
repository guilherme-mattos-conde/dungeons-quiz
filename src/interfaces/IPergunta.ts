import type { Dificuldade } from "@/types";

export interface IPergunta {
    marcarComoRespondida(): void;
    resetarResposta(): void;
    verificarResposta(alternativaSelecionada: string): boolean;
    getEnunciado(): string;
    getAlternativas(): string[];
    getDificuldade(): Dificuldade;
    foiRespondida(): boolean;
}
