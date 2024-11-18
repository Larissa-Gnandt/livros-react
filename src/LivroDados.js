import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora"; 
import Livro from "./modelo/Livro";
import React from "react";

const LivroDados = () => {
 
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = new Livro(
      "", 
      titulo,
      resumo,
      autores.split("\n"), 
      codEditora,
    );

    controleLivro
      .incluir(novoLivro) 
      .then(() => {
        navigate("/"); 
      });
};

return (
  <main>
    <h1>Incluir Novo Livro</h1>
    <form onSubmit={incluir}>
      {/* Campo Título */}
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      {/* Campo Resumo */}
      <div>
        <label>Resumo:</label>
        <textarea
          value={resumo}
          onChange={(e) => setResumo(e.target.value)}
          required
        />
      </div>

      {/* Campo Autores */}
      <div>
        <label>Autores (separados por linha):</label>
        <textarea
          value={autores}
          onChange={(e) => setAutores(e.target.value)}
          required
        />
      </div>

      {/* Combo de Editoras */}
      <div>
        <label>Editora:</label>
        <select value={codEditora} onChange={tratarCombo}>
          {opcoes.map((opcao) => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.text}
            </option>
          ))}
        </select>
      </div>

      {/* Botão de submissão */}
      <button type="submit">Incluir Livro</button>
    </form>
  </main>
);
};

export default LivroDados;
