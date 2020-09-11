const routes = require('./hello');
const app = require('fastify')({
    logger: true
});

app.register(routes);

/* app.get('/', async (req, rep) => {
    rep.send({ hello: 'world'});
});
app.listen(3000, (err, address) => {
    if(err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening on ${address}`);
})
 */

/*  app.get('/', async (req, rep) => {
     return { hello: 'world' };
 }); */

 const start = async () => {
     try {
         await app.listen(3000);
     } catch (err) {
         app.log.error(err);
         process.exit(1);
     }
 }

 start();
