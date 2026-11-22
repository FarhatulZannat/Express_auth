import {Router} from "express";
import {userController} from "./users.controller";
import {auth} from "../../middlewares/auth";

export const userRoutes: Router = Router()

userRoutes.post("/", userController.createUser)
userRoutes.get("/", auth('admin','agent'), userController.getAllUsers)
userRoutes.get("/:id", userController.getSingleUser)
userRoutes.put("/:id", userController.updateUser)
userRoutes.delete("/:id", userController.deleteUser)