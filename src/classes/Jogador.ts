import { Personagem } from './Personagem';
import { Barbaro } from './Personagens/Barbaro';

import type { IJogador } from '@/interfaces/IJogador';

export class Jogador implements IJogador {
    private nome: string;
    private personagem: Personagem;

    constructor(nome: string) {
        this.nome = nome;
        this.personagem = new Barbaro();
    }

    public getNome() {
        return this.nome;
    }

    public getPersonagem() {
        return this.personagem;
    }

    public setPersonagem(personagem: Personagem) {
        this.personagem = personagem;
    }
}
