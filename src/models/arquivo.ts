export interface Arquivo {
    abrir(): void;
    salvar(): void;
}

export abstract class EditorArquivo {
    
    abstract criarArquivo(): Arquivo;

    gerenciarArquivo(): void {
        const arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    }
}