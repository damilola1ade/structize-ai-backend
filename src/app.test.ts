import request from "supertest";
import { app } from "./app";

describe("POST /compute", () => {
  it("should return 200 and start computation", async () => {
    const response = await request(app)
      .post("/compute")
      .send({ a: 4, b: 2 })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({ message: "Computation started" });
  });
});
