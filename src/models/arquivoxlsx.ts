import { Arquivo, EditorArquivo } from './arquivo';

export class ArquivoXLSX implements Arquivo {

    abrir(): void {
        console.log("Abrindo arquivo XLSX...");
    }

    salvar(): void {
        console.log("Salvando arquivo XLSX...");
    }
}


export class EditorXLSX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoXLSX();
    }
}