import { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros"; 
import ControleEditora from "./controle/ControleEditora"; 
import React from "react";

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

  useEffect(() => {
    if (!carregado) {
      //console.log(controleLivro);
      

      controleLivro
        .obterLivros()  
        .then((livrosObtidos) => {
        //  console.log(livrosObtidos);
          
          setLivros(livrosObtidos);
          setCarregado(true);
        })
        .catch((error) => {
          console.error("Erro ao carregar livros:", error);
        });
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro
      .excluir(codigo) 
      .then(() => {
        setCarregado(false); 
      })
      .catch((error) => {
        console.error("Erro ao excluir livro:", error);
      });
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
          {livros.map((livro, index) => (
            <LinhaLivro
              key={index}  
              livro={livro}
              excluir={excluir}
              index={index} 
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
