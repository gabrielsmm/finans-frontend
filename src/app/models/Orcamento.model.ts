export class Orcamento {
    id: number
    nome: string
    dataInicio: Date
    dataFim: Date
    valor: number

    usuarioId: number;

    public constructor(init?: Partial<any>) {
        Object.assign(this, init);
    }
}