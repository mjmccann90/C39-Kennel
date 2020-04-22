import React from "react"

export default (props) => (
    <section className="employee">
        <h3 className="employee__name">{props.employee.name}</h3>
        <div className="employee__locationId">{props.location.locationId}</div>
        <div className="employee__animalId">{props.animal.animalId}</div>

    </section>
)