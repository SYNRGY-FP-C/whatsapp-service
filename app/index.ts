import cors from "cors";
import express from "express";

import errorHandler from "./middlewares/error.middleware";
import notFoundHandler from "./middlewares/notfound.middleware";
import router from "./router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome whatsapp service" });
});

app.use("/api", router);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
