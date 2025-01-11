import { io } from '../app';
import { JobModel } from '../database/model';
import { delay } from '../helpers/helper';
import { Input, Job } from '../types';

const jobs: Job[] = [
  { type: 'A + B', func: (a, b) => a + b },
  { type: 'A - B', func: (a, b) => a - b },
  { type: 'A * B', func: (a, b) => a * b },
  { type: 'A / B', func: (a, b) => a / b },
];

let jobQueue: Input[] = [];

export const addJobToQueue = async (input: Input) => {
  jobQueue.push(input);
  if (jobQueue.length === 1) processJobs();
};

const processJobs = async () => {
  const input = jobQueue.shift();
  
  if (!input) return;

  let results = {
    a: input.a,
    b: input.b,
    additionResult: 0,
    subtractionResult: 0,
    multiplyResult: 0,
    divisionResult: 0,
  };

  try {
    for (const job of jobs) {

      await delay(3000);

      const result = job.func(input.a, input.b);

      io.emit('result', { jobType: job.type, result, progress: (100 / jobs.length) });
      
      if (job.type === 'A + B') results.additionResult = result;
      if (job.type === 'A - B') results.subtractionResult = result;
      if (job.type === 'A * B') results.multiplyResult = result;
      if (job.type === 'A / B') results.divisionResult = result;
    }

    const newJob = new JobModel(results);
    await newJob.save();
    console.log(results);
  } catch (error) {
    console.error('Error processing job:', error);
  }
};
