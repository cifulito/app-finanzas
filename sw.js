// Service worker mínimo: solo permite "Añadir a pantalla de inicio".
// No cachea datos (la app necesita conexión para sincronizar con Firestore).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", () => {}); // no-op, deja pasar todas las peticiones a la red
