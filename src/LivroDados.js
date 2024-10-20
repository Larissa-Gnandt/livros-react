import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora"; // Certifique-se de ter o controlador de editoras

const LivroDados = () => {
  // a) Instanciar controladores de livros e editoras
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  // b) Definir vetor opcoes com o mapeamento de codEditora para value e nome para text
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // c) Definir estados: titulo, resumo, autores, e codEditora
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  // d) Definir o hook navigate
  const navigate = useNavigate();

  // e) Método tratarCombo
  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  // f) Método incluir
  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = {
      codigo: 0, // Código zero, como solicitado
      titulo,
      resumo,
      autores: autores.split("\n"), // Separar autores por linha
      codEditora,
    };

    controleLivro.incluir(novoLivro); // Incluir novo livro
    navigate("/"); // Navegar para a página de listagem (raiz)
  };

  // g) Retorno do componente
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
