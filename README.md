# Job Computation API

This project provides an API for computing mathematical operations on two numbers (`a` and `b`) and saving the results in MongoDB. The computations include addition, subtraction, multiplication, and division. The API is built with **Express.js**, **MongoDB**, **Socket.io**, and uses **Jest** for testing.

## Project Details
1. Clone the repository
2. Install dependencies: `npm install`
3. To run: `npm run dev`
4. To test: `npm test`

## Project Structure
`app.ts`
* Purpose: Initializes and configures the Express app.
* Key Functions:
- Sets up middleware (JSON parsing, CORS).
- Defines the /compute endpoint.

`jobService.ts`
* Purpose: Contains the logic for processing the jobs and emitting results using Socket.io.
* Key Functions:
-`processJobs()`: Processes the job queue and emits results via Socket.io.
- `delay()`: Helper function to simulate processing delay.

`JobModel.ts`
* Purpose: Defines the MongoDB schema for storing computation results.
* Key Functions:
- Defines a `Job` model with properties for the operation results         (`additionResult`, `subtractionResult`, etc.).
- Saves results to the database.

`jobRoutes.ts`
* Purpose: Defines the routes for handling job computations.
* Key Functions:
- Handles the `/compute` endpoint to initiate the job processing.
