async function mgroute(fastify, opts) {
    fastify.get('/user/:id', async (request, reply) => {
        const db = fastify.mongo.db;
        db.collection('user', onCollection);
        console.log(request.params);
        
        function onCollection (err, col) {
            if (err) return reply.send(err)
            col.findOne({ id: parseInt(request.params.id) }, (err, user) => {
                reply.send(user)
            })
        }
    })
}

module.exports = mgroute;