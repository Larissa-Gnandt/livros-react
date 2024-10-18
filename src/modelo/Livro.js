"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro = /** @class */ (function () {
    function Livro(codigo, codEditora, titulo, resumo, autores) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
    return Livro;
}());
exports.default = Livro;
