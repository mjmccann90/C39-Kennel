import React, { useContext } from "react"
import { CustomerContext } from "../Customer/CustomerDataProvider"
import Customer from "../Customer/Customer"
import "../Customer/Customer.css"

import { LocationContext } from "../location/LocationProvider"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <h2>Customers</h2>

            <ul className="customers">
                {
                    customers.map(customer => {
                        return <Customer key={customer.id} customer={customer} />
                    })
                }
            </ul>
        </>
    )
}