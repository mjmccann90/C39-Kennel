import React from "react"

export default (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.animal.name}</h3>
        <div className="animal__breed">{props.animal.breed}</div>
        <div className="animal__customerId">{props.customer.customerId}</div>
        <div className="animal__locationId">{props.location.locationId}</div>

    </section>
)