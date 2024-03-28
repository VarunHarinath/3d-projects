import { LessonAlgo } from "../models/lessonAlgoModel.js";
import Express from "express";

const router = Express.Router();
// to get all the algo
router.get("/", async (req, res) => {
  try {
    const response = await LessonAlgo.find({});
    res.status(200).json({
      count: response.length,
      data: response,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { title, points, publishYear, description, link } = req.body;
  try {
    const response = await LessonAlgo.create();
  } catch (error) {}
});

export default router;
