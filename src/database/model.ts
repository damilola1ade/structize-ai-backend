import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    a: Number,
    b: Number,
    additionResult: Number,
    subtractionResult: Number,
    multiplyResult: Number,
    divisionResult: Number,
  },
  { timestamps: true }
);

export const JobModel = mongoose.model("Job", jobSchema);
