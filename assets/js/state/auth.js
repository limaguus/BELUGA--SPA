export function isLoggedIn() {
  return localStorage.getItem("beluga_logged") === "1";
}

export function login() {
  localStorage.setItem("beluga_logged", "1");
}

export function logout() {
  localStorage.removeItem("beluga_logged");
}
