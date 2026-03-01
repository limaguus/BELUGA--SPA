// router é um arquivo que faz a navegação de SPA (simple page application)
import { logout } from "./state/auth.js";
import { isLoggedIn } from "./state/auth.js";
const routes = {}; // guarda o mapa da navegação

// Registra uma nova rota no sistema
export function registerRoute(name, render) {
  routes[name] = render;
}

// Inicia o roteador da aplicação
export function startRouter() {
  // Função responsável por renderizar a rota atual
  function renderRoute() {
    // Pega o nome da rota da URL (#/login → login)
    const routeName = window.location.hash.replace("#/", "") || "landing";
    // Pega o elemento onde o conteúdo será renderizado
    const outlet = document.getElementById("app");

    // Se não encontrar o elemento, interrompe
    if (!outlet) return;
    // Se a rota existir no objeto routes
    const publicRoutes = ["landing", "login", "cadastro"];

    const logged = isLoggedIn();

    const topbar = document.getElementById("topbar");
    if (topbar) {
      topbar.classList.toggle("hidden", !logged);
    }

    if (!logged && !publicRoutes.includes(routeName)) {
      window.location.hash = "#/landing";
      return;
    }
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
      logoutBtn.onclick = () => {
        logout();
        window.location.hash = "#/landing";
      };
    }

    if (logged && publicRoutes.includes(routeName)) {
      window.location.hash = "#/dashboard";
      return;
    }
    if (routes[routeName]) {
      const route = routes[routeName];

      // Suporta rota como função (modo antigo) ou como objeto { render, init }
      const html = typeof route === "function" ? route() : route.render();

      outlet.innerHTML = html;

      document.querySelectorAll("[data-route]").forEach((link) => {
        link.classList.toggle("active", link.dataset.route === routeName);
      });

      // Se existir init, chama depois de renderizar
      if (typeof route === "object" && typeof route.init === "function") {
        route.init();
      }

      return;
    }

    // Caso a rota não exista
    outlet.innerHTML = "<h1>Página não encontrada</h1>";
  }
  // Escuta mudanças na URL
  window.addEventListener("hashchange", renderRoute);
  // Renderiza a primeira vez ao abrir o site
  renderRoute();
}
