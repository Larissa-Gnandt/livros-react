import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros"; // Importar controlador de livros
import ControleEditora from "./controle/ControleEditora"; // Importar controlador de editoras

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
        {livro.titulo}
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Hook useEffect para carregar os livros
  useEffect(() => {
    if (!carregado) {
      const livrosObtidos = controleLivro.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    }
  }, [carregado]);

  // Método para excluir livro
  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // Forçar o redesenho da página
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
