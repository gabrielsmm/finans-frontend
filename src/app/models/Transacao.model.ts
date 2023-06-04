export class Transacao {
    id: number
    data: Date
    valor: number
    categoria: number
    descricao: string

    public constructor(init?: Partial<any>) {
        Object.assign(this, init);
    }
}