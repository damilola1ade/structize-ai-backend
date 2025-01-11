import express from 'express';
import cors from 'cors';
import { Server as socketIo } from 'socket.io';
import { config } from './config/config';
import { connectDatabase } from './database/database';
import { computeJob } from './controller/jobController';

export const app = express();

const server = require('http').createServer(app);

const allowedOrigins = [config.frontendUrl, 'http://localhost:3000'];

app.use(express.json());

app.use(cors({ origin: allowedOrigins }));

export const io = new socketIo(server, { cors: { origin: allowedOrigins } });

connectDatabase();

app.post('/compute', computeJob);

server.listen(config.port, () => console.log(`Server running on port ${config.port}`));
