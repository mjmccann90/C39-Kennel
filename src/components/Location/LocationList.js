import React, { useContext } from "react"
import { LocationContext } from "../Location/LocationDataProvider"
import Location from "../Location/Location"
import "../Location/Location.css"


export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
        </div>
    )
}