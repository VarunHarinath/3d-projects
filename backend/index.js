import express from "express";
import lessonsRoute from "./routes/lessonsRoute.js";
import lessonAlgoRoute from "./routes/lessonAlogroute.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/lessonDsa", lessonsRoute);
app.use("/lessonAlgo", lessonAlgoRoute);
app.get("/", (req, res) => {
  res.send("Home");
});

mongoose
  .connect(
    "mongodb+srv://root:root@gamify.5zmp6j4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("App connected to database");
    app.listen(3000, () => {
      console.log(`App is listening to port: ${3000}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// web socket serverx

import http from "http";
import { Server } from "socket.io";

const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://13.235.176.186:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);
  socket.on("send_msg", (data) => {
    socket.emit("recive_msg", data);
  });
});

// Listen on port 3010 using an ES6 arrow function
const PORT = 3010;
httpServer.listen(PORT, () => {
  console.log(`Web Socket.io Server is running on port ${PORT}`);
});
