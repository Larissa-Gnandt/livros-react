import React from 'react';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados'; // Importa o LivroDados
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa o Router e suas ferramentas

function App() {
  return (
    <Router>
      <div className="App">
        {/* Links para navegar entre as rotas */}
        <nav>
          <ul>
            <li>
              <Link to="/">Listagem de Livros</Link> {/* Link para a rota da listagem */}
            </li>
            <li>
              <Link to="/livro-dados">Incluir Livro</Link> {/* Link para a rota de inclusão */}
            </li>
          </ul>
        </nav>

        {/* Definição das rotas */}
        <Routes>
          {/* Exibe a lista de livros na rota raiz ("/") */}
          <Route path="/" element={<LivroLista />} />

          {/* Exibe o formulário de inclusão de livro na rota "/livro-dados" */}
          <Route path="/livro-dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

