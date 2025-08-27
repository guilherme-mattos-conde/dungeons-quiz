import { Personagem } from "../Personagem";
import { Habilidade } from "../Habilidade";

export class Rainha extends Personagem {
  constructor() {
    const habilidades: Habilidade[] = [
      new Habilidade("Feitiço Simples", 60, "feitico-simples.png", "Fácil"),
      new Habilidade("Cajado de Luz", 70, "cajado-de-luz.png", "Média"),
      new Habilidade("Bomba de Luz", 80, "bomba-de-luz.png", "Difícil")
    ];
    super("Rainha", 250, "rainha.png", habilidades);
  }
}
