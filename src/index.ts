import { routers } from './routers'

// Main entry point in workers
addEventListener('fetch', event => {
  const request = event.request
  let url = new URL(request.url)
  const match = (routers as any)[url.hostname].match(request.method, url.pathname)
  if (match) {
    event.respondWith(match.handler(match.params))
  } else {
    return new Response('not found', { status: 404 })
  }
})
