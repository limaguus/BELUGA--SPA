// Importa as funções do sistema de rotas
import { registerRoute, startRouter } from "./router.js";

// Tela inicial (Landing / Hero)
function heroScreen() {
  return `
    <h1>Hero</h1>
    <p>Landing page do Beluga.</p>
  `;
}
// Tela de login
function loginScreen() {
  return `
    <h1>Login</h1>
    <p>Tela de login.</p>
  `;
}
// Tela principal do sistema
function dashboardScreen() {
  return `
    <h1>Dashboard</h1>
    <p>Visão geral do aluno.</p>
  `;
}
  function cadastroScreen() {
  return `
    <h1>Cadastro</h1>
  `;
}
function matrizScreen() {
  return `
    <h1> Matriz Curricular</h1>
  `;
}
function quizScreen() {
  return `
    <h1>Quiz</h1>
  `;
}
function planoScreen() {
  return `
    <h1>Plano de Estudos</h1>
  `;
}

function perfilScreen() {
  return `
    <h1>Perfil</h1>
  `;
}
function feedScreen() {
  return `<h1>Feed</h1>`;
}

function forumScreen() {
  return `<h1>Fórum</h1>`;
}

function notificacoesScreen() {
  return `<h1>Notificações</h1>`;
}

function aulasScreen() {
  return `<h1>Minhas Aulas</h1>`;
}

function conquistasScreen() {
  return `<h1>Conquistas</h1>`;
}
// Associa o nome da rota à função que renderiza a tela
registerRoute("hero", heroScreen);
registerRoute("login", loginScreen);
registerRoute("dashboard", dashboardScreen);
registerRoute("cadastro", cadastroScreen);
registerRoute("matriz", matrizScreen);
registerRoute("quiz", quizScreen);
registerRoute("plano", planoScreen);
registerRoute("perfil", perfilScreen);
registerRoute("feed", feedScreen);
registerRoute("forum", forumScreen);
registerRoute("notificacoes", notificacoesScreen);
registerRoute("aulas", aulasScreen);
registerRoute("conquistas", conquistasScreen);
// Inicia o sistema de navegação SPA
startRouter();
