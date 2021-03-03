'use strict';
const Hapi = require('@hapi/hapi');
const { model } = require('./db');
const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    module.exports=(server);
    const index = require('./routes/index');
    server.start();
    console.log('Server running on %s', server.info.uri);
    module.exports=(server);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
init();
