// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const middleware = jsonServer.defaults();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const port = process.env.PORT || 3000;

server.use(router);
server.use(jsonServer.bodyParser);
server.use(middleware);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server listen on port ${port}`));
