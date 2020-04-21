import React, { useContext } from "react"
import { EmployeeContext } from "../Employee/EmployeeDataProvider"
import Employee from "../Employee/Employee"
import "../Employee/Employee.css"


export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
            {
                employees.map(employ => <Employee key={employ.id} employee={employ} />)
            }
        </div>
    )
}