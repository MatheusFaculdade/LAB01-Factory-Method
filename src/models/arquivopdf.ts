import { Arquivo, EditorArquivo } from './arquivo';

export class ArquivoPDF implements Arquivo {

    abrir(): void {
        console.log("Abrindo arquivo PDF...");
    }

    salvar(): void {
        console.log("Salvando arquivo PDF...");
    }
}

export class EditorPDF extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoPDF();
    }
}