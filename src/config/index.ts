import * as path from "node:path";
import dotenv from 'dotenv'

dotenv.config({
    path: path.join(process.cwd(), '.env')
})

export const config = {
    port: process.env.PORT,
    connection_string: process.env.DATABASE_URL as string,
    jwt_secret: process.env.JWT_SECRET as string,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET as string
}