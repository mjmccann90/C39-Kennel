import React, { useState } from "react"
import Dashboard from "../components/Dashboard"
import Auth from "../components/Auth/Auth"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("kennel_customer") ? <Dashboard /> : <Auth toggle={toggle} />
    )
}