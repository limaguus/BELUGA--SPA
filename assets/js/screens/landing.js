export function landingScreen() {
  return `
    <div class="card" style="max-width: 520px;">
      <h1>Beluga</h1>
      <p>Seu sistema de estudos com IA.</p>
      <br />
      <button class="button" id="go-login">Começar</button>
    </div>
  `;
}

export function landingInit() {
  const btn = document.getElementById("go-login");
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.hash = "#/login";
    });
  }
}
