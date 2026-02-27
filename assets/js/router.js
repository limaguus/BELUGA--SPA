const routes = {};

export function registerRoute(name, render) {
  routes[name] = render;
}

export function startRouter() {
  function renderRoute() {
    const routeName = window.location.hash.replace("#/", "") || "hero";
    const outlet = document.getElementById("app");

    if (!outlet) return;

       if (routes[routeName]) {
      outlet.innerHTML = routes[routeName]();

      document.querySelectorAll(".sidebar a").forEach((link) => {
        link.classList.toggle("active", link.dataset.route === routeName);
      });

      return;
    }

    outlet.innerHTML = "<h1>Página não encontrada</h1>";
  }

  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}