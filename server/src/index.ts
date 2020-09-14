import "reflect-metadata"; // this shim is required
import { useExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import {Connection, createConnection, getConnectionOptions, useContainer as typeUseContainer } from "typeorm";
import { ShopifyController } from "./controllers/ShopifyController";
import * as express from 'express';

useContainer(Container);
typeUseContainer(Container);

let expressServer = express();
let cors = require('cors');
expressServer.use(cors());

// creates express app, registers all controller routes and returns you express app instance
const app = useExpressServer(expressServer)({
	cors: cors(),
    controllers: [ShopifyController] // we specify controllers we want to use
});
app.use(cors());

let connection: Connection;
getConnectionOptions().then(async (x) => {
	connection = await createConnection(x);
	global.console.log(connection);
});

// run express application on port 3000
app.listen(3000);
