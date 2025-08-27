import { Pergunta } from '@/classes/Pergunta';

export async function obterPerguntas(): Promise<Pergunta[]> {
    const res = await fetch('https://gist.githubusercontent.com/guilherme-mattos-conde/ef185ef8e04de5594bfe2bc381ab306d/raw/1651325790f973494c7fe2af741d4fd296bd3f31/perguntas.json');
    return res.json();
}
