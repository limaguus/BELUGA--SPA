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
    <div class="card" style="max-width: 400px;">
    <h1>Login<h1>
    <input class="input" placeholder="Email" />
    <br /><br />
    <input class="input" placeholder="Senha" type="password" />
    <br /><br />
    <button class="button">Entrar</button>
    </div>
  `;
}
// Tela principal do sistema
function dashboardScreen() {
  return `
  <div class="grid grid-3">
  <div class="card">
    <h2>Matéria 1</h2>
    <p>Progresso: 60%</p>
    </div>

    <div class="card">
    <h2>Matéria 2</h2>
    <p>Progresso: 45%</p>
    </div>

    <div class="card">
    <h2>Matéria 3</h2>
    <p>Progresso: 80%</p>
    </div>
  </div>

  <br />
  <div class="card">
  <button class="button" onclick="openModal()">Abrir Modal</button>
  </div>

  <div class="modal-overlay" id="modal">
  <div class="modal">
  <h2>Modal Base</h2>
  <p>Estrutura reutilizável.</p>
  <br />
  <button class="button" onclick="closeModal()">Fechar</button>
  </div>
  </div>
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

/* para o modal funcionar */
window.openModal = function () {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.add("active");
};

window.closeModal = function () {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.remove("active");
};