import express, {type Application , type Request , type Response} from 'express'
import {userRoutes} from "./modules/users/users.route";
import {authRoutes} from "./modules/auth/auth.route";
import {profileRoute} from "./modules/profile/profile.route";
import {logger} from "./middlewares/logger";
import {globalErrorHandler} from "./middlewares/globalErrorHandler";
import cors from 'cors'


export const app: Application = express()

const corsOptions = {
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

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

app.use(globalErrorHandler)