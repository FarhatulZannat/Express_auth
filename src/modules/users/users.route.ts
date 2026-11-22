import {Router} from "express";
import {userController} from "./users.controller";
import {auth} from "../../middlewares/auth";
import {USER_ROLE} from "../../types";

export const userRoutes: Router = Router()

userRoutes.post("/", userController.createUser)
userRoutes.get("/", auth(USER_ROLE.admin, USER_ROLE.agent), userController.getAllUsers)
userRoutes.get("/:id", userController.getSingleUser)
userRoutes.put("/:id", userController.updateUser)
userRoutes.delete("/:id", userController.deleteUser)