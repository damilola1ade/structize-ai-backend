import express from "express";
import cors from "cors";
import { Server as socketIo } from "socket.io";
import { JobModel } from "./model";
import { Job } from "./types";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

const server = require("http").createServer(app);

app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "", "http://localhost:3000"],
  })
);

const io = new socketIo(server, {
  cors: {
    origin: [process.env.FRONTEND_URL || "", "http://localhost:3000"],
  },
});

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const jobs: Job[] = [
  { type: "A+B", func: (a, b) => a + b },
  { type: "A-B", func: (a, b) => a - b },
  { type: "A*B", func: (a, b) => a * b },
  { type: "A/B", func: (a, b) => a / b },
];

let jobQueue: { a: number; b: number }[] = [];

app.post("/compute", (req, res) => {
  const { a, b } = req.body;
  jobQueue.push({ a, b });
  if (jobQueue.length === 1) processJobs();
  res.status(200).send({ message: "Computation started" });
});

const processJobs = () => {
  const job = jobQueue.shift();
  if (!job) return;

  let results = {
    a: job.a,
    b: job.b,
    additionResult: 0,
    subtractionResult: 0,
    multiplyResult: 0,
    divisionResult: 0,
  };

  jobs.forEach((item, index) => {
    setTimeout(async () => {
      const result = item.func(job.a, job.b);
      io.emit("result", {
        jobType: item.type,
        result,
        progress: 25,
      });

      if (item.type === "A+B") results.additionResult = result;
      if (item.type === "A-B") results.subtractionResult = result;
      if (item.type === "A*B") results.multiplyResult = result;
      if (item.type === "A/B") results.divisionResult = result;

      if (index === jobs.length - 1) {
        // Save final results in MongoDB
        const newJob = new JobModel(results);
        await newJob.save();
        console.log("Job saved to MongoDB:", results);

        if (jobQueue.length) processJobs();
      }
    }, 3000 * index);
  });
};

server.listen(8000, () => console.log("Server running on port 8000"));
