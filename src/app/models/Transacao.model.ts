import { Categoria } from "./Categoria.model"

export class Transacao {
    id: number
    data: Date
    valor: number
    categoria: Categoria
    descricao: string

    usuarioId: number;
    categoriaId: number;

    public constructor(init?: Partial<any>) {
        Object.assign(this, init);
    }
}