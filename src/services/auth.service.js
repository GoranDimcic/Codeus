import db from '../db/db.js'

export const getUser = async (email) => {
    const result = await db('user')
        .where({
            email, email
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

export const loginUser = async (emailOrUsername, password) => {
    const result = await db('user')
        .where({
            email: emailOrUsername, password: password
        })

    //uslov da li je login preko nick-a ili email-a

    return result;
}

export const updateUser = async (email, username, first_name, last_name) => {
    const result = await db('user')
        .where({
            email: email
        })
        .update({
            username: username,
            first_name: first_name,
            last_name: last_name
        })

    return result;
}

export const updatePass = async () => {

    //update password samo ako unese isti pass koji je vec imao
}