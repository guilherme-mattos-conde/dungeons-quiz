import type { Dificuldade } from "@/types";

export class Pergunta {
    private enunciado: string;
    private alternativas: string[];
    private alternativaCorreta: string;
    private dificuldade: Dificuldade;
    private respondida: boolean;
    
    constructor(enunciado: string, alternativas: string[], alternativaCorreta: string, dificuldade: Dificuldade) {
        this.enunciado = enunciado;
        this.alternativas = alternativas;
        this.alternativaCorreta = alternativaCorreta;
        this.dificuldade = dificuldade;
        this.respondida = false;
    }

    marcarComoRespondida() {
        this.respondida = true;
    }

    resetarResposta(): void {
        this.respondida = false;
    }

    verificarResposta(resposta: string): boolean {
        return resposta === this.alternativaCorreta;
    }

    getEnunciado(): string {
        return this.enunciado;
    }

    getAlternativas(): string[] {
        return this.alternativas;
    }

    getDificuldade(): Dificuldade {
        return this.dificuldade;
    }

    foiRespondida(): boolean {
        return this.respondida;
    }
}
