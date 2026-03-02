//landingScreen: retorna o HTML da landing (página pública)
// Regra: aqui a gente só "desenha" a tela (HTML em string).
export function landingScreen() {
  return `
    <div class="public">
      <!-- Header público da landing -->
      <header class="public-header">
        <div class="brand">BELUGA</div>

        <nav class="public-nav" aria-label="Navegação da landing">
          <a href="#/landing#funcionalidades">Funcionalidades</a>
          <a href="#/landing#preco">Preço</a>
          <a href="#/landing#contato">Contato</a>
        </nav>
      </header>

      <!-- Conteúdo principal -->
      <main class="public-main">
        <!-- HERO: primeira dobra (tela inicial) -->
        <section class="hero" id="topo">
          <div class="hero-left">
            <h1>
              Organize seus estudos de forma
              <span class="hero-highlight">INTELIGENTE</span>
            </h1>

            <p>Planejamento de forma fácil e eficaz.</p>

            <div class="hero-actions">
              <button class="button" id="cta-login" type="button">
                Login/Cadastro
              </button>
            </div>
          </div>

          <div class="hero-right">
            <div class="hero-visual">
              <img
                src="./assets/images/BELUGA.png"
                alt="Beluga IA"
                class="hero-image"
              />
            </div>
          </div>
        </section>

        <!-- Funcionalidades -->
        <section class="features" id="funcionalidades">
          <p class="landing-message">
            Feito por estudantes para estudantes.
          </p>

          <div class="features-row">
            <div class="card feature-card">
              <h3>Planejamento com IA</h3>
              <p>Cronograma feito com base na sua rotina.</p>
            </div>

            <div class="card feature-card">
              <h3>Alertas inteligentes</h3>
              <p>Receba lembretes de provas e entregas.</p>
            </div>

            <div class="card feature-card">
              <h3>Avaliação e conhecimento</h3>
              <p>Quizzes que mostram onde você precisa focar.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

// landingInit: roda depois que o HTML já foi inserido no DOM
// Regra: aqui a gente conecta comportamento (eventos).
export function landingInit() {
  const cta = document.getElementById("cta-login");

  if (cta) {
    cta.addEventListener("click", () => {
      window.location.hash = "#/login";
    });
  }
}
