import { Personagem } from "../Personagem";
import { Habilidade } from "../Habilidade";

export class Barbaro extends Personagem {
  constructor() {
    const habilidades: Habilidade[] = [
        new Habilidade("Chicote", 45, "chicote.png", "Fácil"),
        new Habilidade("Espada Bárbara", 50, "espada-barbara.png", "Média"),
        new Habilidade("Maça", 55, "maca.png", "Difícil")
    ];
    super("Bárbaro", 350, "barbaro.png", habilidades);
  }
}
