import React, { Component } from 'react'
// import Cookies from "js-cookie"

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        // Cookies.set("username", this.state.username)
        fetch("http://127.0.0.1:5000/user/authentication", {
            method:"POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data === "SUCCESS") {
                // Cookies.set("username", this.state.username)
                // this.props.history.push("/")
            }
            else {
                this.setState({ loginFailed: true })
            }
        })
        .catch(error => {
            console.log("Error logging in:", error)
            this.setState({ loginError: true })
        })
    }

    render() {
        return (
            <div className='login-wrapper'>
                <h3>Login:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />

                    <input type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        placeholder="Password"
                    />

                    <button type="submit">Login</button>
                </form>
                {this.state.loginFailed ? <p>Invaild Credentials...</p> : null}
                {this.state.loginError ? <p>Error Logging In...PLease try again later :D</p> : null}
            </div>
        )}
    }
