import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import runSeed from './seed/seed';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { RegisterRoutes } from './routes';
import * as swaggerJson from './swagger/swagger.json';
import * as swaggerUI from 'swagger-ui-express';

import {
    Response as ExResponse,
    Request as ExRequest,
    NextFunction,
} from "express";
import { ApiError } from '../error/api-error';
import path from 'path';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(() => {

        // Runs the seed script to populate the database with recipes
        runSeed();

        app.use(cors());
        app.use(bodyParser.json());

        RegisterRoutes(app);
        app.use(['/openapi', '/docs', '/swagger'], swaggerUI.serve, swaggerUI.setup(swaggerJson));

        app.get('swagger.json', (req, res) => {
            res.sendFile(path.join(__dirname, 'swagger', 'swagger.json'));
        });

        app.use(function errorHandler(
            err: unknown,
            req: ExRequest,
            res: ExResponse,
            next: NextFunction
        ): ExResponse | void {
            if (err instanceof ApiError) {
                console.warn(`Caught ApiError for ${req.path}:`, err);
                return res.status(err.statusCode).json(err);
            }
            next();
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        app.get('/', (req, res) => {
            res.send('The Recipecate API is running!');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
