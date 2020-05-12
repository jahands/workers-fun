import { Router } from 'tiny-request-router'

export const testRouter = new Router()
testRouter.get('/worker', async () => new Response('Hi from worker!'))
testRouter.get('/hello/:name', async (params: any) => new Response(`Hello ${params.name}!`))
testRouter.post('/test', async () => new Response('Post received!'))
testRouter.get('/test2', async () => new Response('got!'))
