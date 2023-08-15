"use strict";

var alunos = [{
  "nome": "Thiago",
  "nota": "10"
}, {
  "nome": "João",
  "nota": "6"
}, {
  "nome": "Lucas",
  "nota": "4"
}];
var aprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(aprovados);