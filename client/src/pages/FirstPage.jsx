import { useState } from "react"
import Button from "../components/Button"
import { StyleFirstPage, StyleLogin, StyleRegistration } from "../styles/FirstPage"

const FirstPage = () => {
    const [loginData, setLoginData] = useState({
        name: '',
        password: ''
    })

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: ''
    })

    const loginUser = async () => {
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usernameOrEmail: loginData.name,
                password: loginData.password
            })
        })
        console.log(await response.json())
    }

    const registerUser = async () => {
        const response = await fetch('http://localhost:4000/auth/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: registerData.username,
                email: registerData.email,
                firstName: registerData.firstName,
                lastName: registerData.lastName,
                password: registerData.password,
                repeatPassword: registerData.repeatPassword
            })
        })
        console.log(await response.json())
    }

    return (
        <StyleFirstPage>
            <StyleLogin>
                <h1>Login</h1>
                <input placeholder="Username or email" onKeyUp={(e) => setLoginData(prevState => ({ ...prevState, name: e.target.value }))}></input>
                <input placeholder="Password" type="password" onKeyUp={(e) => setLoginData(prevState => ({ ...prevState, password: e.target.value }))}></input>
                <Button text1="Login" onClick={() => loginUser()} />
            </StyleLogin>
            <StyleRegistration>
                <h1>Register</h1>
                <input placeholder="Email" onKeyUp={(e) => setRegisterData(prevState => ({ ...prevState, email: e.target.value }))}></input>
                <input placeholder="Username" onKeyUp={(e) => setRegisterData(prevState => ({ ...prevState, username: e.target.value }))}></input>
                <input placeholder="First name" onKeyUp={(e) => setRegisterData(prevState => ({ ...prevState, firstName: e.target.value }))}></input>
                <input placeholder="Last name" onKeyUp={(e) => setRegisterData(prevState => ({ ...prevState, lastName: e.target.value }))}></input>
                <input placeholder="Password" type="password" onKeyUp={(e) => setRegisterData(prevState => ({ ...prevState, password: e.target.value }))}></input>
                <input placeholder="Repeat password" type="password" onKeyUp={(e) => setRegisterData(prevState => ({ ...prevState, repeatPassword: e.target.value }))}></input>
                <Button text1="Register" onClick={() => registerUser()} />
            </StyleRegistration>
        </StyleFirstPage>
    )
}

export default FirstPage
