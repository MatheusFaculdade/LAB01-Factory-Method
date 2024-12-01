import { Arquivo,EditorArquivo } from './arquivo';

export class ArquivoDOCX implements Arquivo {

    abrir(): void {
        console.log("Abrindo arquivo DOCX...");
    }

    salvar(): void {
        console.log("Salvando arquivo DOCX...");
    }
}

export class EditorDOCX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoDOCX();
    }
}