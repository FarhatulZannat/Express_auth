import express, {type Application , type Request , type Response} from 'express'
import {userRoutes} from "./modules/users/users.route";
import {authRoutes} from "./modules/auth/auth.route";
import {profileRoute} from "./modules/profile/profile.route";
import {logger} from "./middlewares/logger";

export const app: Application = express()

app.use(express.json())
app.use(logger)

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/profile", profileRoute)

app.get("/",(req: Request, res:Response)  => {
    res.json({
        message: 'this is root route'
    })
} )