import { Schema, model, Document } from "mongoose";

interface Job extends Document {
  a: number;
  b: number;
  additionResult: number;
  subtractionResult: number;
  multiplyResult: number;
  divisionResult: number;
}

const jobSchema = new Schema<Job>({
  a: { type: Number, required: true },
  b: { type: Number, required: true },
  additionResult: { type: Number },
  subtractionResult: { type: Number },
  multiplyResult: { type: Number },
  divisionResult: { type: Number },
});

export const JobModel = model<Job>("Job", jobSchema);
