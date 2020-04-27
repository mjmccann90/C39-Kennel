import React from "react"

import "./Kennel.css"
import "./Layout.css"

import { AnimalDataProvider } from "./Animal/AnimalDataProvider"
import AnimalList from "./Animal/AnimalList"
import "./Animal/Animal.css"


import { CustomerDataProvider } from "./Customer/CustomerDataProvider"
import CustomerList from "./Customer/CustomerList"
import "./Customer/Customer.css"

import { EmployeeDataProvider } from "./Employee/EmployeeDataProvider"
import EmployeeList from "./Employee/EmployeeList"
import "./Employee/Employee.css"

import LocationList from "./Location/LocationList"
import LocationDataProvider from "./Location/LocationDataProvider"
import "./Location/Location.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()

    // HIGHER ORDER FUNCTION. IT RETURNS OTHER FUNCTION (i.e. COMPONENTS)
    const showLocations = () => (
        <LocationDataProvider>
            <LocationList />
        </LocationDataProvider>
    )

    const showCustomers = () => (
        <CustomerDataProvider>
            <CustomerList />
        </CustomerDataProvider>
    )

    const showEmployees = () => (
        <EmployeeDataProvider>
            <LocationDataProvider>
                <EmployeeList />
            </LocationDataProvider>
        </EmployeeDataProvider>
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "customers") {
            setComponents(showCustomers)
        }
        else if (activeList === "locations") {
            setComponents(showLocations)
        }
        else if (activeList === "employees") {
            setComponents(showEmployees)
        }
    }, [activeList])

    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <AnimalDataProvider>
                    <CustomerDataProvider>
                        <LocationDataProvider>
                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />
                        </LocationDataProvider>
                    </CustomerDataProvider>
                </AnimalDataProvider>
            </div>
            <div className="dataContainer">
                <h1>Nashville Kennels</h1>
                <small>Loving care when you're not there.</small>
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                        <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                        <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div>
                    </div>
                    <div className="listDisplay">
                        {components}
                    </div>
                </div>
            </div>
        </div>
    )
}
