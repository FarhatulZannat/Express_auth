import {Router} from "express";
import {userController} from "./users.controller";

export const userRoutes: Router = Router()

userRoutes.post("/", userController.createUser)
userRoutes.get("/", userController.getAllUsers)
userRoutes.get("/:id", userController.getSingleUser)
userRoutes.put("/:id", userController.updateUser)
userRoutes.delete("/:id", userController.deleteUser)