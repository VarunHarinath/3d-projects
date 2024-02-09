import express from 'express';
import { Lesson } from '../models/lessonModel.js';

const router = express.Router();

// Route for Saving a new Book
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.points ||
            !request.body.publishYear ||
            !request.body.description
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, points, publishYear,description',
            });
        }
        const newBook = {
            title: request.body.title,
            points: request.body.points,
            publishYear: request.body.publishYear,
            description: request.body.description
        };

        const lesson = await Lesson.create(newBook);

        return response.status(201).send(lesson);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All Books 
router.get('/', async (request, response) => {
    try {
        const lesson = await Lesson.find({});

        return response.status(200).json({
            count: lesson.length,
            data: lesson,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Getting a Book by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const lesson = await Lesson.findById(id);

        return response.status(200).json(lesson);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Updating a Book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.points ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, points, publishYear',
            });
        }

        const { id } = request.params;

        const result = await Lesson.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Lesson not found' });
        }

        return response.status(200).send({ message: 'Lesson updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Lesson.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Lesson not found' });
        }

        return response.status(200).send({ message: 'Lesson deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
