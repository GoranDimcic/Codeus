import db from '../db/db.js'

export const getUser = async (email, username) => {
    const result = await db('user')
        .where({
            email: email,
            username: username
        })

    return result;
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

export const updateUser = async (email, username, first_name, last_name) => {
    const result = await db('user')
        .where({
            email: email,
            username: username
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