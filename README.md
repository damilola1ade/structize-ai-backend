# Job Computation API

This project provides an API for computing mathematical operations on two numbers (`a` and `b`) and saving the results in MongoDB. The computations include addition, subtraction, multiplication, and division. The API is built with **Express.js**, **MongoDB**, **Socket.io**, and uses **Jest** for testing.

## Project Details
1. Clone the repository
2. Install dependencies: `npm install`
3. To run: `npm run dev`
4. To test: `npm test`

## Project Structure
. ├── src/ │ ├── model/ │ │ └── JobModel.ts # MongoDB model for saving computation results │ ├── types/ │ │ └── Job.ts # TypeScript types for job structure and operations │ ├── services/ │ │ └── jobService.ts # Logic for processing jobs and emitting results │ ├── app.ts # Main application file, sets up Express server │ ├── server.ts # Starts the Express server and connects to MongoDB │ └── routes/ │ └── jobRoutes.ts # Defines API endpoints ├── tests/ │ └── app.test.ts # Unit tests for the /compute endpoint ├── .env # Environment variables (e.g., MongoDB URL, FRONTEND_URL) ├── package.json # Project dependencies and scripts ├── tsconfig.json # TypeScript configuration └── README.md # Project documentation
