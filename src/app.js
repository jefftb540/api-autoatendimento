import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import tutorialRoutes from './routes/tutorialRoutes';
import stepRoutes from './routes/stepRoutes';
import tokenRoutes from './routes/TokenRoutes';
import './database/index';

dotenv.config();

const whitelist = process.env.CORS_WHITELIST.split(',');
console.log(whitelist[0]);
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error('Not Allowed by Cors'));
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
    this.app.use(cors(corsOptions));
  }

  routes() {
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/categories/', categoryRoutes);
    this.app.use('/tutorials/', tutorialRoutes);
    this.app.use('/steps/', stepRoutes);
  }
}

export default new App().app;
