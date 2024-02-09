import express from 'express';
import lessonsRoute from './routes/lessonsRoute.js'
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())

app.use('/lesson', lessonsRoute);

mongoose
    .connect('mongodb+srv://root:root@gamify.5zmp6j4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('App connected to database');
        app.listen(3000, () => {
            console.log(`App is listening to port: ${3000}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
