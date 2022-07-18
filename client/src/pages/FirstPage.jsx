import { StyleFirstPage, StyleLogin, StyleRegistration } from "../styles/FirstPage"

const FirstPage = () => {
    return (
        <StyleFirstPage>
            <StyleLogin>
                <h1>Login</h1>
                <input placeholder="Username or email"></input>
                <input placeholder="Password"></input>
            </StyleLogin>
            <StyleRegistration>
                <h1>Register</h1>
                <input placeholder="Username"></input>
                <input placeholder="Email"></input>
                <input placeholder="First name"></input>
                <input placeholder="Last name"></input>
                <input placeholder="Password"></input>
                <input placeholder="Repeat password"></input>
            </StyleRegistration>
        </StyleFirstPage>
    )
}

export default FirstPage
