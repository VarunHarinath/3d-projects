import mongoose from "mongoose";

const lessonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      completed: Number,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const LessonDSA = mongoose.model("LessonDSA", lessonSchema);
