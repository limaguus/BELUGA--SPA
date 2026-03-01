import { login } from "../state/auth.js";

export function cadastroScreen() {
  return `
    <div class="card" style="max-width: 420px;">
      <h1>Cadastro</h1>

      <input class="input" placeholder="Nome" />
      <br /><br />

      <input class="input" placeholder="Email" />
      <br /><br />

      <input class="input" type="password" placeholder="Senha" />
      <br /><br />

      <button class="button" id="finish-cadastro">Criar conta</button>
    </div>
  `;
}

export function cadastroInit() {
  const btn = document.getElementById("finish-cadastro");
  if (!btn) return;

  btn.addEventListener("click", () => {
    login(); // simula login
    window.location.hash = "#/dashboard";
  });
}
