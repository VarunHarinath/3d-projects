import express from "express";
import { LessonDSA } from "../models/lessonDSAModel.js";

const router = express.Router();

// Route for Saving a new Book
router.post("/", async (request, response) => {
  try {
    // if (
    //   !request.body.title ||
    //   !request.body.points ||
    //   !request.body.publishYear ||
    //   !request.body.description ||
    //   !request.body.content
    // ) {
    //   return response.status(400).send({
    //     message:
    //       "Send all required fields: title, points, publishYear,description",
    //   });
    // }
    const newBook = {
      title: request.body.title,
      points: request.body.points,
      publishYear: request.body.publishYear,
      description: request.body.description,
      link: request.body.link,
      content: request.body.content,
    };

    const lesson = await LessonDSA.create(newBook);

    return response.status(201).send(lesson);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All lessons
router.get("/", async (request, response) => {
  try {
    const lesson = await LessonDSA.find({});

    return response.status(200).json(lesson);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting a lesson  by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const lesson = await LessonDSA.findById(id);

    return response.status(200).json(lesson);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Updating a lesson
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.points ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, points, publishYear",
      });
    }

    const { id } = request.params;

    const result = await LessonDSA.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "LessonDSA not found" });
    }

    return response
      .status(200)
      .send({ message: "LessonDSA updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a lesson
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await LessonDSA.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "LessonDSA not found" });
    }

    return response
      .status(200)
      .send({ message: "LessonDSA deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
