import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import runSeed from './seed/seed';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { ingredientRouter, recipeRouter } from './routes';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Recipecate API',
            version: '2.0.0',
        },
        components: {
            schemas: {
                Recipe: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                        },
                        ingredients: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    quantity: { type: 'number' },
                                    unit: { type: 'string' },
                                },
                            },
                        },
                        instructions: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.routes.ts'], // path to the files where you've defined your endpoints
};

const specs = swaggerJsdoc(options);

mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(() => {

        // Runs the seed script to populate the database with recipes
        runSeed();

        app.use(cors());
        app.use(bodyParser.json());

        app.use('/api/v1', recipeRouter);
        app.use('/api/v1', ingredientRouter);

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

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
