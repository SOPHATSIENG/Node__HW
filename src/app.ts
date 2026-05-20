import express from "express";
import router from "./routers/userRoute";

const app = express();
app.use(express.json())
app.use("/api", router)


export default app;
