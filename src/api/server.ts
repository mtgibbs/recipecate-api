import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import runSeed from './seed/seed';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { RegisterRoutes } from './routes';
import * as swaggerJson from './swagger/swagger.json';
import * as swaggerUI from 'swagger-ui-express';

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

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
