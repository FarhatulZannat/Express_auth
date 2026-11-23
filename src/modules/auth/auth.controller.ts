import {authService} from "./auth.service";
import type {Request, Response} from "express";
import sendResponce from "../../utils/sendResponce";

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await authService.loginUserIntoDB(req.body)

        const {refreshToken} =result

        res.cookie("refresh_Token", refreshToken, {
            secure: false,  //production e gele true hobe
            httpOnly: true, //Prevent xss attack
            sameSite: 'lax',
            path: "/",
            domain: "localhost"
        })

        sendResponce(res,{
            statusCode: 200,
            success: true,
            message: "User login successfully!",
            data: result,
        })
    } catch (error: any) {
        sendResponce(res,{
            statusCode: 500,
            success: false,
            message: error?.message,
            error: error,
        })
    }
}


export const generateToken = async (req: Request, res: Response) => {
    console.log(req.cookies)
    try {
        const result = await authService.generateAccessToken(req.cookies.refresh_Token)

        res.status(200).json({
            success: true,
            message: "Access token generated successfully !",
            data: result
        })
    }catch (error: any){
        res.status(500).json({
            success: false,
            message: error?.message,
            error: error
        })
    }
}


export const authController = {
    loginUser,
    generateToken
}