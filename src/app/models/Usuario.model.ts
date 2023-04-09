export class Usuario {
    nome: string
    email: string
    senha: string

    public constructor(init?: Partial<any>) {
        Object.assign(this, init);
    }
}