export function loginScreen() {
  return `
    <div class="public auth">
      <!-- Header público igual a landing -->
      <header class="public-header">
        <div class="brand-wrap">
          <img class="brand-logo" src="./assets/images/logof.png" alt="Logo Beluga" />
          <div class="brand">BELUGA</div>

    
          
        </div>

        <nav class="public-nav" aria-label="Navegação pública">
          <a href="#/landing#funcionalidades">Funcionalidades</a>
          <a href="#/landing#preco">Preço</a>
          <a href="#/landing#contato">Contato</a>
        </nav>
      </header>

      <main class="public-main">
        <section class="auth-hero">
          <!-- coluna esquerda -->
          <div class="auth-left">
            <h1 class="auth-title">
              Bem-Vindo de<br />
              Volta!
            </h1>

            <form class="auth-card" id="login-form">
              <input class="input auth-input" type="email" name="email" placeholder="Email" required />
              <input class="input auth-input" type="password" name="senha" placeholder="Senha" required />

              <div class="auth-row">
                <a class="auth-link" href="#/recuperar">Esqueceu a senha?</a>
              </div>

              <button class="button auth-button" type="submit">Entrar</button>

              <p class="auth-footer">
                Não possui conta?
                <a class="auth-link" href="#/cadastro">Cadastre-se aqui</a>
              </p>
            </form>
          </div>

          <!-- coluna direita -->
          <div class="auth-right">
            <img class="auth-beluga" src="./assets/images/BELUGA.png" alt="Beluga IA" />
          </div>
        </section>

        <!-- frase em onda -->
<section class="quote-wave" aria-label="Citação Paulo Freire">

  <svg class="quote-svg" viewBox="0 0 1200 260" preserveAspectRatio="none">

    <defs>
      <path
        id="wavePath"
        d="
          M 50 280
          C 280 60, 320 60, 420 120
          C 520 180, 620 240, 720 210
          C 820 170, 900 120, 980 150
          C 1060 190, 1120 230, 1180 210
        "
      />
    </defs>

    <text class="quote-text">
      <textPath
        href="#wavePath"
        startOffset="50%"
        text-anchor="middle"
      >
        Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo. Paulo Freire
      </textPath>
    </text>

  </svg>
  <img
  class="wave-algae algae-left"
  src="./assets/images/alga.png"
  alt="alga decorativa"\>
   
  <img
  class="wave-algae algae-right"
  src="./assets/images/alga.png"
  alt="alga decorativa"\>


</section>
      </main>
    </div>
  `;
}

import { login } from "../state/auth.js";

export function loginInit() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // pega valores se quiser validar
    const email = document.getElementById("email")?.value?.trim();
    const senha = document.getElementById("senha")?.value?.trim();

    // 1) marca como logado (isso é o mais importante)
    login({ email });

    // 2) vai pro dashboard
    window.location.hash = "#/dashboard";
  });

  // link "Cadastre-se aqui"
  const goCadastro = document.getElementById("go-cadastro");
  if (goCadastro) {
    goCadastro.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "#/cadastro";
    });
  }
}
