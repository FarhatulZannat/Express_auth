import {Router} from "express";
import {profileController} from "./profile.controller";

export const profileRoute: Router = Router()

profileRoute.post('/', profileController.createProfile)