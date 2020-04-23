import React from "react"

import "./Kennel.css"

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

export default () => (
    <>
        <h2>Cosmic Chameleon Cennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>


        <AnimalDataProvider>
            <CustomerDataProvider>
                <EmployeeDataProvider>
                    <LocationDataProvider>
                        <AnimalList />
                        <LocationList />
                        <CustomerList />
                        <EmployeeList />
                    </LocationDataProvider>
                </EmployeeDataProvider>
            </CustomerDataProvider>
        </AnimalDataProvider>
    </>

)