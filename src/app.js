import express from "express";
import userRoutes from "./routers/userRoute.js";
const app = express();


app.use("/api", userRoutes)


export default app;
