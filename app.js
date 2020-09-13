require('dotenv-safe').config();
const routes = require('./hello');
const test = require('./test');
const mgroute = require('./mg');
const app = require('fastify')({
    logger: true,
    ignoreTrailingSlash: true,
    caseSensitive: false,
    requestIdHeader: 'r-id',
    requestIdLogLabel: 'r-id'
});

app.register(require('fastify-mongodb'),{
        forceClose: true,
        url: process.env.MONGO_URI,
        name: 'mongo'
    })
   .route(test)
   .register(mgroute)
   .register(routes, { prefix: '/v1'})
   .after(err => {
       console.log(err);
       console.log('插件加载完了');
   })
   .ready(err => {
       console.log('ready');
       console.log(app.printRoutes());
   });

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
