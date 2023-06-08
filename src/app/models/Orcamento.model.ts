export class Orcamento {
    id: number
    nome: string
    dataInicio: Date
    dataFim: Date
    valor: number
    valorReceitas: number
    valorDespesas: number

    usuarioId: number;

    public constructor(init?: Partial<any>) {
        Object.assign(this, init);
    }
}