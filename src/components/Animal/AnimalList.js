import React, { useContext } from "react"
import { AnimalContext } from "../Animal/AnimalDataProvider"
import { LocationContext } from "../Location/LocationDataProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "../Animal/Animal"
import "../Animal/Animal.css"


export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <div className="animals">
            {animals.map(animal => <Animal key={animal.id} animal={animal} />)}
        </div>
    )
}