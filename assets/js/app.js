import { registerRoute, startRouter } from "./router.js";

// Public (antes de entrar)
import { landingScreen, landingInit } from "./screens/landing.js";
import { loginScreen, loginInit } from "./screens/login.js";
import { cadastroScreen, cadastroInit } from "./screens/cadastro.js";

// App (depois de entrar)
import { dashboardScreen, dashboardInit } from "./screens/dashboard.js";

// Outras telas (por enquanto simples)
import { matrizScreen } from "./screens/matriz.js";
import { quizScreen } from "./screens/quiz.js";
import { planoEstudoScreen } from "./screens/planoEstudo.js";
import { perfilScreen } from "./screens/perfil.js";
import { feedScreen } from "./screens/feed.js";
import { forumScreen } from "./screens/forum.js";
import { notificacoesScreen } from "./screens/notificacoes.js";
import { aulasScreen } from "./screens/aulas.js";
import { conquistasScreen } from "./screens/conquistas.js";

// Rotas públicas
registerRoute("landing", { render: landingScreen, init: landingInit });
registerRoute("login", { render: loginScreen, init: loginInit });
registerRoute("cadastro", { render: cadastroScreen, init: cadastroInit });

// Rotas privadas (dentro do app)
registerRoute("dashboard", { render: dashboardScreen, init: dashboardInit });

registerRoute("matriz", matrizScreen);
registerRoute("quiz", quizScreen);
registerRoute("plano", planoEstudoScreen);
registerRoute("perfil", perfilScreen);
registerRoute("feed", feedScreen);
registerRoute("forum", forumScreen);
registerRoute("notificacoes", notificacoesScreen);
registerRoute("aulas", aulasScreen);
registerRoute("conquistas", conquistasScreen);

startRouter();
