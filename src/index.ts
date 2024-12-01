import {EditorDOCX} from './models/arquivodocx';
import {EditorPDF} from './models/arquivopdf';
import {EditorTXT} from './models/arquivotxt';
import {EditorXLSX} from './models/arquivoxlsx'

function main() {
//novas instancias
const editorPDF = new EditorPDF();
const editorDOCX = new EditorDOCX();
const editorXLSX = new EditorXLSX();
const editorTXT = new EditorTXT();

//abertura e fechamento dos arquivos
editorPDF.gerenciarArquivo(); 
editorDOCX.gerenciarArquivo();
editorXLSX.gerenciarArquivo();
editorTXT.gerenciarArquivo();
}

main();
