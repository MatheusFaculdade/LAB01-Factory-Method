import { Arquivo, EditorArquivo } from './arquivo';

export class ArquivoTXT implements Arquivo {

    abrir(): void {
        console.log("Abrindo arquivo TXT...");
    }

    salvar(): void {
        console.log("Salvando arquivo TXT...");
    }
}


export class EditorTXT extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoTXT();
    }
}