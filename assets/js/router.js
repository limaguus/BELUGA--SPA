// router é um arquivo que faz a navegação de SPA (simple page application)
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
        const routeName = window.location.hash.replace("#/", "") || "hero";
         // Pega o elemento onde o conteúdo será renderizado
        const outlet = document.getElementById("app");

         // Se não encontrar o elemento, interrompe
        if (!outlet) return;
       // Se a rota existir no objeto routes
       if (routes[routeName]) {
      outlet.innerHTML = routes[routeName]();// Renderiza o HTML da tela

      // Atualiza link ativo no menu
      document.querySelectorAll(".sidebar a").forEach((link) => {
        link.classList.toggle("active", link.dataset.route === routeName);
      });

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