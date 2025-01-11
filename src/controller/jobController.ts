import { Request, Response } from "express";
import { addJobToQueue } from "../service/jobService";

export const computeJob = async (req: Request, res: Response) => {
  const { a, b } = req.body;
  try {
    await addJobToQueue({ a, b });
    res.status(200).send({ message: "Computation started" });
  } catch (error) {
    res.status(500).send({ message: "Failed to start computation", error });
  }
};
