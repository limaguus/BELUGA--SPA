export function loginScreen() {
  return `
    <div class="card" style="max-width: 420px;">
      <h1>Login</h1>

      <input class="input" placeholder="Email" />
      <br /><br />

      <input class="input" type="password" placeholder="Senha" />
      <br /><br />

      <button class="button" id="go-cadastro">Entrar</button>
      <br /><br />
      <button class="button" id="go-cadastro2" style="background:#334155;">
        Criar conta
      </button>
    </div>
  `;
}

export function loginInit() {
  const entrar = document.getElementById("go-cadastro");
  const criar = document.getElementById("go-cadastro2");

  if (entrar)
    entrar.addEventListener(
      "click",
      () => (window.location.hash = "#/cadastro"),
    );
  if (criar)
    criar.addEventListener(
      "click",
      () => (window.location.hash = "#/cadastro"),
    );
}
