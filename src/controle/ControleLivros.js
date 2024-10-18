// ControleLivros.js

// Remova a importação, pois você está definindo a classe neste arquivo.
class ControleLivro {
  constructor() {
    // Inicializando o array de livros com três exemplos
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "Livro A",
        resumo: "Resumo do Livro A",
        autores: ["Autor A"],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "Livro B",
        resumo: "Resumo do Livro B",
        autores: ["Autor B"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "Livro C",
        resumo: "Resumo do Livro C",
        autores: ["Autor C"],
      },
    ];
  }

  obterLivros() {
    return this.livros;
  }

  incluir(novoLivro) {
    const maiorCodigo = Math.max(...this.livros.map((livro) => livro.codigo));
    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  }

  excluir(codigo) {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}

// Exemplo de uso da classe
const controleLivro = new ControleLivro();

// Obter todos os livros
console.log("Livros:", controleLivro.obterLivros());

// Incluir um novo livro
controleLivro.incluir({
  codEditora: 1,
  titulo: "Livro D",
  resumo: "Resumo do Livro D",
  autores: ["Autor D"],
});
console.log("Livros após inclusão:", controleLivro.obterLivros());

// Excluir um livro pelo código
controleLivro.excluir(2);
console.log("Livros após exclusão:", controleLivro.obterLivros());

// Exporte a classe se precisar usá-la em outros arquivos
export default ControleLivro;
