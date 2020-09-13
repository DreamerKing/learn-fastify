async function routes(fastify, opts) {
    fastify.get('/', async (request, reply) => {
        request.log.info('prefix: %s',fastify.prefix);
        return { hello: 'world12', version: fastify.prefix };
    })
}

module.exports = routes;