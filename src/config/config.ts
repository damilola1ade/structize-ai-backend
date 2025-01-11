import dotenv from "dotenv";

dotenv.config();

export const config = {
  mongoDBUrl: process.env.MONGODB_URL || "",
  frontendUrl: process.env.FRONTEND_URL || "",
  port: process.env.PORT || 8000,
};
