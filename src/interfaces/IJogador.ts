import type { Personagem } from "@/classes/Personagem";

export interface IJogador {
    getNome(): string;
    getPersonagem(): Personagem;
    setPersonagem(personagem: Personagem): void;
}
