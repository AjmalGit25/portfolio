import express from "express";
import "dotenv/config";

import connectDatabase from "./config/db.js";
import visitorRouter from "./routes/visitor.routes.js";
import aiRouter from "./routes/ai.routes.js";
import emailRouter from "./routes/email.routes.js";
import cors from "cors";

const port = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

app.use(cors({
  origin: FRONTEND_URL
}));

app.set("trust proxy", true);
app.use(express.json());

// Routes
app.use("/api/v1/visitors", visitorRouter);
app.use("/api/v1/ai", aiRouter);
app.use("/api/v1/email", emailRouter);

app.get('/', (req, res) => {
  res.status(200).send('Portfolio backend server is running 🚀');
});

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();