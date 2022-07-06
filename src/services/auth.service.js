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

export const getUserById = async (userId) => {
    const result = await db('user')
        .where({
            id, userId
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

export const createUser = async (email, username, password, firstName, lasdtName) => {
    const result = await db('user')
        .insert({
            email: email,
            username: username,
            password: password,
            firstName: firstName,
            lasdtName: lasdtName
        })
    return result;
}

export const updateUser = async (userId, firstName, lasdtName) => {
    const result = await db('user')
        .where({
            id: userId
        })
        .update({
            firstName: firstName,
            lasdtName: lasdtName
        })
    return result;
}

export const updatePass = async () => {

    //update password samo ako unese isti pass koji je vec imao
}

export const getToken = async (user) => {
    const token = jwt.sign(
        {
            id: user.id
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
    return token
}