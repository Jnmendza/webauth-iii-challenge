const server = require('./api/server.js');

const port = process.env.PORT || 8000;
server.listern(port, () => console.log(`\n** Running on port ${port}**\n`));