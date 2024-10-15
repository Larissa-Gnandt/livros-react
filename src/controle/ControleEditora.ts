import Editora from "../modelo/Editora";

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    // Inicializando o array de editoras com três exemplos
    this.editoras = [
      { codEditora: 1, nome: "Editora A" },
      { codEditora: 2, nome: "Editora B" },
      { codEditora: 3, nome: "Editora C" },
    ];
  }

  // Método para retornar todas as editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Método para retornar o nome da editora utilizando filter
  getNomeEditora(codEditora: number): string | undefined {
    const editoraFiltrada = this.editoras.filter(
      (e) => e.codEditora === codEditora
    );
    return editoraFiltrada.length > 0 ? editoraFiltrada[0].nome : undefined;
  }
}

export default ControleEditora;
