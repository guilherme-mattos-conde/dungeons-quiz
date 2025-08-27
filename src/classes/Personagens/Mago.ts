import { Personagem } from "../Personagem";
import { Habilidade } from "../Habilidade";

export class Mago extends Personagem {
  constructor() {
    const habilidades: Habilidade[] = [
        new Habilidade("Poção de Dano", 60, "pocao-de-dano.png", "Fácil"),
        new Habilidade("Encantamento", 70, "encantamento.png", "Média"),
        new Habilidade("Superfície Solar", 80, "superficie-solar.png", "Difícil")
    ];
    super("Mago", 250, "mago.png", habilidades);
  }
}
