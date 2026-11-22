
import type { NextFunction, Request, Response } from "express";
import fs from "fs";


export const logger = (req: Request, res: Response, next: NextFunction) => {
    const formatDateTime = (date: Date) => {
        const pad = (n: number) => String(n).padStart(2, "0");
        const yyyy = date.getFullYear();
        const mm = pad(date.getMonth() + 1);
        const dd = pad(date.getDate());
        const hours24 = date.getHours();
        const period = hours24 >= 12 ? "PM" : "AM";
        const hh = pad(hours24 % 12 || 12);
        const mi = pad(date.getMinutes());
        const ss = pad(date.getSeconds());
        return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss} ${period}`;
    };



    const log = `\nMethod : ${req.method} | URL : ${req.url} | Time : ${formatDateTime(new Date())}\n`

    fs.appendFile("logger.txt", log, (err) => {
        console.log(err)
    })
    next()
}