import { openModal, closeModal } from "../components/modal.js";

export function dashboardScreen() {
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
      <button class="button" id="open-dashboard-modal">Abrir Modal</button>
    </div>

    <div class="modal-overlay" id="modal">
      <div class="modal">
        <h2>Modal Base</h2>
        <p>Estrutura reutilizável.</p>
        <br />
        <button class="button" id="close-dashboard-modal">Fechar</button>
      </div>
    </div>
  `;
}

export function dashboardInit() {
  const openBtn = document.getElementById("open-dashboard-modal"); //Me dá o objeto do DOM que representa esse elemento.
  const closeBtn = document.getElementById("close-dashboard-modal");

  if (openBtn) openBtn.addEventListener("click", () => openModal("modal"));
  if (closeBtn) closeBtn.addEventListener("click", () => closeModal("modal"));
}
