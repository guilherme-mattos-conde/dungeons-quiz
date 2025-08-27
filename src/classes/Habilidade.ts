import type { Dificuldade } from "@/types";

export class Habilidade {
    private nome: string;
    private dano: number;
    private img: string;
    private dificuldadePergunta: Dificuldade;

    constructor(nome: string, dano: number, img: string, dificuldadePergunta: Dificuldade) {
        this.nome = nome;
        this.dano = dano;
        this.img = img;
        this.dificuldadePergunta = dificuldadePergunta;
    }

    getNome(): string {
        return this.nome;
    }

    getDano(): number {
        return this.dano;
    }

    getImg(): string {
        return this.img;
    }

    getDificuldadePergunta(): Dificuldade {
        return this.dificuldadePergunta;
    }
}
