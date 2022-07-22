import db from '../db/db.js'
import jwt from "jsonwebtoken"

export const getUser = async (email, username) => {
    const result = await db('user')
        .where({
            email: email
        })
        .orWhere({
            username: username
        })
    return result;
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

export const createUser = async (email, username, password, firstName, lastName) => {
    const result = await db('user')
        .insert({
            email: email,
            password: password,
            username: username,
            firstName: firstName,
            lastName: lastName
        })
    return result;
}

export const getToken = async (user) => {
    const token = jwt.sign(
        {
            id: user.id
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "5h",
        }
    );
    return token
}