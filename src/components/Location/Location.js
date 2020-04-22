// When we use Location component in LocationList, React takes the keys passed
// to the Location component and puts it into one object


import React from "react"

export default (props) => (
    <section className="location">
        <h3 className="location__name">{props.location.name}</h3>
        <div className="location__address">{props.location.address}</div>
        <div className="location__employeeId">{props.employee.employeeId}</div>

    </section>
)