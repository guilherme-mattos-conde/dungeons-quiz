import { Personagem } from "../Personagem";
import { Habilidade } from "../Habilidade";

export class Mumia extends Personagem {
  constructor() {
    const habilidades: Habilidade[] = [
        new Habilidade("Item Amaldiçoado", 55, "item-amaldicoado.png", "Fácil"),
        new Habilidade("Besouro Possuído", 70, "besouro-possuido.png", "Média"),
        new Habilidade("Tempestade de Areia", 85, "tempestade-de-areia.png", "Difícil")
    ];
    super("Mumia", 250, "mumia.png", habilidades);
  }
}
