import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';
import firebaseAdmin from 'firebase-admin';

const router = express();

// Server Handling
const httpServer = http.createServer(router);

/** Connect to FireBase Admin  **/
let serviceAccountKey = require('./config/serviceAccountKey.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccountKey)
});

/** Connect to Mongo  **/
mongoose.connect(config.mongo.url,config.mongo.options)
.then(()=>{
    logging.info('Mongo Connected. ');
})
.catch(error => {
    logging.error(error);
})

/** Logging Middleware  **/
router.use((req, res, next) => {
    logging.info(`METHOD '${req.method}' - URL: '${req.url}' - IP: '${req.socket.remoteAddress}'`);

    res.on('finish',() => {
        logging.info(`METHOD '${req.method}' - URL: '${req.url}' - IP: '${req.socket.remoteAddress}' - STATUS: '${res.statusCode}'`);
    });
});

/** Parse the body  **/