import { Config } from './src/config';
import Server from './src/startup';
import container from './src/startup/container';
import mongoose  from 'mongoose';

//to resolve connect remote mongo db dns issue, uncomment the following lines
//import * as dns from 'node:dns/promises';
//dns.setServers(['1.1.1.1', '8.8.8.8']);

const server = container.resolve<Server>('app');
const { MONGO_URI } = container.resolve<Config>("config");

mongoose.connect(MONGO_URI)
    .then(() =>server.start())
    .catch(console.log);