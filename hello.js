async function routes(fastify, opts) {
    fastify.get('/', async (request, reply) => {
        return { hello: 'world12' };
    })
}

module.exports = routes;