// When we use Employee component in EmployeeList, React takes the keys passed
// to the Employee component and puts it into one object

import React, { useState, useContext } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { EmployeeContext } from "../Employee/EmployeeDataProvider"

export default ({ employee, location }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { deleteEmployee } = useContext(EmployeeContext)

    return (
        <>
            <li>
                <span className="fakeLink href" onClick={toggle}>{employee.name}</span>
                <span className="fakeLink icon--delete" onClick={() => {
                    deleteEmployee(employee)
                }}>🗑</span>
            </li>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {employee.name}
                </ModalHeader>
                <ModalBody>
                    <div className="animal__breed">
                        <label className="label--animal">Address:</label> {employee.address}
                    </div>
                    <div className="animal__location">
                        <label className="label--animal">Location:</label> {location.locationId}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}