import { Config } from './src/config';
import Server from './src/startup';
import container from './src/startup/container';
import mongoose  from 'mongoose';

const server = container.resolve<Server>('app');
const { MONGO_URI } = container.resolve<Config>("config");

mongoose.connect(MONGO_URI)
    .then(() =>server.start())
    .catch(console.log);