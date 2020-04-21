import React, { useContext } from "react"
import { CustomerContext } from "../Customer/CustomerDataProvider"
import Customer from "../Customer/Customer"
import "../Customer/Customer.css"


export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div className="customers">
            {
                customers.map(cust => <Customer key={customer.id} customer={cust} />)
            }
        </div>
    )
}