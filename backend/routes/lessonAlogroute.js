import { LessonAlgo } from "../models/lessonAlgoModel.js";
import Express from "express";

const router = Express.Router();
// to get all the algo
router.get("/", async (req, res) => {
  try {
    const data = await LessonAlgo.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { title, points, publishYear, description, link, content } = req.body;
  try {
    const response = await LessonAlgo.create({
      title,
      points,
      publishYear,
      description,
      link,
      content,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
