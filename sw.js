// Сайт переехал на другой адрес. Этот файл убирает со старого адреса сохранённую в браузере
// копию приложения, чтобы посетитель попал на страницу с переходом, а не в старую версию.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) await caches.delete(key)
      await self.registration.unregister()
      for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url)
    })(),
  )
})
