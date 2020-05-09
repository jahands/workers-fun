import { Router } from './router'

export async function handleRequest(request: Request): Promise<Response> {
  const r = new Router()
  // Replace with the approriate paths and handlers
  r.get('.*/bar', () => new Response('responding for /bar'))
  r.get('.*/foo', request => handler(request))
  r.post('.*/foo.*', request => handler(request))
  r.get('/demos/router/foo', request => fetch(request)) // return the response from the origin

  r.get('/', () => new Response('Hello worker!')) // return a default message for the root route

  const resp = await r.route(request)
  return resp
}

function handler(request) {
  const init = {
    headers: { 'content-type': 'application/json' },
  }
  const body = JSON.stringify({ some: 'json' })
  return new Response(body, init)
}
