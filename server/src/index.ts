import "reflect-metadata"; // this shim is required
import { useExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import {Connection, createConnection, getConnectionOptions, useContainer as typeUseContainer } from "typeorm";
import { ShopifyController } from "./controllers/ShopifyController";
import express = require('express');

useContainer(Container);
typeUseContainer(Container);

let expressServer = express();
let cors = require('cors');
expressServer.use(cors());

// creates express app, registers all controller routes and returns you express app instance
const app = useExpressServer(expressServer, {
    controllers: [ShopifyController] // we specify controllers we want to use
});

let connection: Connection;
getConnectionOptions().then(async (x) => {
	connection = await createConnection(x);
});
app.set('trust proxy', true);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});