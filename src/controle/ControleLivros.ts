import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
  _id?: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autorres: string[];
}

export class ControleLivro {

  constructor() {}
  
  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error("Falha ao obter livros");
      }
      const livros: LivroMongo[] = await response.json();

      return livros.map((livro) => {
        return new Livro(
          livro._id!,
          livro.codEditora,
          livro.titulo,
          livro.resumo,
          livro.autorres
        );
      });
      } catch (error: any) {
        throw new Error(`Erro ao obter livros: ${error.message}`);
      }
    }

 async incluir(novoLivro: Livro): Promise<boolean> {
  try {
    const livroMongo: LivroMongo = {
      codEditora: novoLivro.codEditora,
      titulo: novoLivro.titulo,
      resumo: novoLivro.resumo,
      autorres: novoLivro.autores,
    };
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livroMongo),
    });

    const result = await response.json();

    if (result.ok) {
      return true;
    } else {
      throw new Error("Falha ao incluir livro");
    }
  } catch (error: any) {
    throw new Error(`Erro ao incluir livro: ${error.message}`);
  }
}

  async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.ok) {
        return true;
      } else {
        throw new Error("Falha ao excluir livro");
      }
    } catch (error: any) {
      throw new Error(`Erro ao excluir livro: ${error.message}`);
    }
  }
}

export default ControleLivro;
