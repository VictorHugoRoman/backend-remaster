import Server from 'src/startup';
import container from './src/startup/container';
import mongoose  from 'mongoose';
import express from 'express';

const server = container.resolve<Server>('app');
const { MONGO_URI } = container.resolve("config");

mongoose.connect(MONGO_URI)
    .then(() => { 
        server.Start(); 
    })
    .catch(console.log); //si promesa coneccion mongo falla, le dejamos la responsabilidad al catch de ejecutar el console.log