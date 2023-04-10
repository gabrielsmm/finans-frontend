export class Usuario {
    id: number
    nome: string
    email: string
    senha: string
    perfis: []

    public constructor(init?: Partial<any>) {
        Object.assign(this, init);
    }
}