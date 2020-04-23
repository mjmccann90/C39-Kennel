import React from "react"
import Login from "../Auth/Login"
import Register from "../Auth/Register"

export default ({ toggle }) => {
    return (
        <>
            <h1 className="welcome">Welcome to Nashville Kennels</h1>
            <div className="authContainer">
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </div>
        </>
    )
}