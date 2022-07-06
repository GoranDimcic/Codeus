import db from '../db/db.js'
import jwt from "jsonwebtoken"

export const getUser = async (email, username) => {
    const result = await db('user')
        .where({
            email: email,
            username: username
        })
    return result;
}

export const getUserById = async (user_id) => {
    const result = await db('user')
        .where({
            user_id, user_id
        })
    return result
}

export const getUserByEmail = async (email) => {
    const result = await db('user')
        .where({
            email, email
        })
    return result
}

export const getUserByUsername = async (username) => {
    const result = await db('user')
        .where({
            username, username
        })
    return result
}

export const createUser = async (email, username, password, first_name, last_name) => {
    const result = await db('user')
        .insert({
            email: email,
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name
        })
    return result;
}

export const updateUser = async (user_id, first_name, last_name) => {
    const result = await db('user')
        .where({
            user_id: user_id
        })
        .update({
            first_name: first_name,
            last_name: last_name
        })
    return result;
}

export const updatePass = async () => {

    //update password samo ako unese isti pass koji je vec imao
}

export const getToken = async (user) => {
    const token = jwt.sign(
        {
            user_id: user.user_id
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
    return token
}