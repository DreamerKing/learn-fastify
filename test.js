module.exports = {
    method: 'GET',
    url: '/bar',
    schema: {
        querystring: {
            name: { type: 'string'},
            age: { type: 'integer'}       
        }
    },
    response: { 
        200: { 
            type: 'object',
            properties: { 
                hello: {
                    type: 'string'
                }
            }
        }
    },
    handler: async function(request, reply) {
        console.log(request);
        return { hello: 'world23'}
    }
}