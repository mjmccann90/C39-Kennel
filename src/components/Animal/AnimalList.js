import React, { useContext } from "react"
import { AnimalContext } from "../Animal/AnimalDataProvider"
import Animal from "../Animal/Animal"
import "../Animal/Animal.css"


export default () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
            {
                animals.map(dog => <Animal key={animal.id} animal={dog} />)
            }
        </div>
    )
}