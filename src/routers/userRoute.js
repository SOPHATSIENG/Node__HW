import express from "express";
import  UserProducts  from "../controllers/userController.js";
const userRoutes = express.Router()

 const up = new UserProducts();
 userRoutes.post("/products", up.createproduct)
userRoutes.get("/products", up.getAll)
userRoutes.get("/products/:id", up.getbyID)
userRoutes.put("/products/:id", up.updateproduct)
userRoutes.delete("/products/:id", up.destoy)


export default userRoutes;