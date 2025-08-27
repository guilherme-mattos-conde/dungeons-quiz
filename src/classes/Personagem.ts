import { Habilidade } from './Habilidade';

export abstract class Personagem {
    private nome: string;
    private vida: number;
    private img: string;
    private habilidades: Habilidade[];
    private habilidadeSelecionada: Habilidade;

    constructor(nome: string, vida: number, img: string, habilidades: Habilidade[]) {
        this.nome = nome;
        this.vida = vida;
        this.img = img;
        this.habilidades = habilidades;
        this.habilidadeSelecionada = habilidades[0];
    }

    atacar(oponente: Personagem): void {
        oponente.vida > this.habilidadeSelecionada.getDano() ? oponente.vida -= this.habilidadeSelecionada.getDano() : oponente.vida = 0;
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }

    getNome(): string {
        return this.nome;
    }

    getVida(): number {
        return this.vida;
    }

    getImg(): string {
        return this.img;
    }

    getHabilidades(): Habilidade[] {
        return this.habilidades;
    }

    getHabilidadeSelecionada(): Habilidade {
        return this.habilidadeSelecionada;
    }

    setHabilidadeSelecionada(habilidade: Habilidade): void {
        this.habilidadeSelecionada = habilidade;
    }
}
