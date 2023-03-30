import express from "express";
import "dotenv/config";
import cors from "cors";

import { userRouter } from "./routers/userRoute";

const server = express();
server
  .use(cors())
  .use(express.json())
  .use("/users", userRouter);

const port = parseInt(process.env.PORT || "5000");

server.listen(4000, () => {
    console.log(`Running on port ${port}`);
});

export default server;