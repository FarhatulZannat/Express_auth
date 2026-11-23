import {Router} from "express";
import {authController} from "./auth.controller";

export const authRoutes: Router = Router()

authRoutes.post("/login", authController.loginUser)
authRoutes.post("/refresh-token", authController.generateToken)