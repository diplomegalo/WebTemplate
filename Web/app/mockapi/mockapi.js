// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require("json-server");
const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require("cors");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use("/api", router);
server.use(jsonServer.bodyParser);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server listen on port ${port}`));
