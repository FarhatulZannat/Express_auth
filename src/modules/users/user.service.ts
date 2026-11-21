import type {IUser} from "./user.interface";
import bcrypt from "bcryptjs"
import {pool} from "../../db";
import {getRawAsset} from "node:sea";

 export const createUserIntoDB = async (payload: IUser) => {
    const {name, email, password, age } = payload

     const hashPassword = await bcrypt.hash(password, 10)
     // console.log(hashPassword)

     const result = await pool.query(`
     INSERT INTO users (name,email,password,age) VALUES 
    ($1,$2,$3,$4) RETURNING *
     `, [name,email,hashPassword, age])
     console.log(result);
    delete result.rows[0].password
     return result
 }

 const getAllUsersFromDB = async () => {
      return  await pool.query(`
     SELECT * FROM users 
     `)
 }


 const getSingleUserFromDB = async (id:string) =>{
     const result = await pool.query(`
     SELECT * FROM users WHERE id = $1
     `, [id])
     return result
 }


 const updateUserFromDB = async (payload: any, id:string) => {
     const {name, password, age, is_active} = payload

     const result = await pool.query(`
         UPDATE users
         SET name      = COALESCE($1, name),
             password  = COALESCE($2, password),
             age       = COALESCE($3, age),
             is_active = COALESCE($4, is_active),
             updated_at = NOW()
         
         WHERE ID = $5 RETURNING * 
     `, [name ?? null, password ?? null, age ?? null, is_active ?? null, id])
     return result;
 }

     const deleteUserFromDB = async (id: string) => {
         const result = await pool.query(`
         DELETE FROM users WHERE id = $1
         `, [id])
         return result
     }







export const userService = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserFromDB,
    deleteUserFromDB
}