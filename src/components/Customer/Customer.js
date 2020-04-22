// When we use Customer component in CustomerList, React takes the keys passed
// to the Animal component and puts it into one object

import React from "react"

export default (props) => (
    <section className="customer">
        <h3 className="customer__name">{props.customer.name}</h3>
        <div className="customer__address">{props.location.address}</div>
        <div className="customer__animalId">{props.animal.animalId}</div>

    </section>
)