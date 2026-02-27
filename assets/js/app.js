import { registerRoute, startRouter } from "./router.js";

function heroScreen() {
  return `
    <h1>Hero</h1>
    <p>Landing page do Beluga.</p>
  `;
}

function loginScreen() {
  return `
    <h1>Login</h1>
    <p>Tela de login.</p>
  `;
}

function dashboardScreen() {
  return `
    <h1>Dashboard</h1>
    <p>Visão geral do aluno.</p>
  `;
}

registerRoute("hero", heroScreen);
registerRoute("login", loginScreen);
registerRoute("dashboard", dashboardScreen);

startRouter();
