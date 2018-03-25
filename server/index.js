const next = require('next');
const Hapi = require('hapi');
const Good = require('good');
const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('./next-wrapper');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = new Hapi.Server({
    port
});

const pluginOptions = [
    {
        name: 'Good',
        register: Good.register,
        options: {
            ops: false,
            reporters: {
                console: [{
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }
];

app
.prepare()
.then(async () => {
    try {
        await server.register(pluginOptions); // Good is not ready for Hapi 17 yet.

        server.route({
            method: 'GET',
            path: '/health',
            handler: (request, reply) => reply({ status: 'OK' })
        });

        server.route({
            method: 'GET',
            path: '/_next/{p*}', /* next specific routes */
            handler: nextHandlerWrapper(app)
        });

        server.route({
            method: 'GET',
            path: '/product/{slug}',
            handler: pathWrapper(app, '/product')
        });

        server.route({
            method: 'GET',
            path: '/{p*}', /* catch all route */
            handler: defaultHandlerWrapper(app)
        });

        await server.start();

        console.log(`> Ready on ${server.info.uri}`);
    } catch (error) {
        console.log('Error starting server');
        console.log(error);
    }
});
