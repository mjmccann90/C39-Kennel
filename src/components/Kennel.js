import React from "react"

import "./Kennel.css"

import Animal from "../components/Animal/Animal"
import { AnimalDataProvider } from "../components/Animal/AnimalDataProvider"
import AnimalList from "../components/Animal/AnimalList"
import "./Animal/Animal.css"


import Customer from "../components/Customer/Customer"
import { CustomerDataProvider } from "../components/Customer/CustomerDataProvider"
import CustomerList from "../components/Customer/CustomerList"
import "./Customer/Customer.css"

import Employee from "../components/Employee/Employee"
import { EmployeeDataProvider } from "../components/Employee/EmployeeDataProvider"
import EmployeeList from "../components/Employee/EmployeeList"
import "./Employee/Employee.css"

import Location from "../components/Location/Location"
import LocationList from "../components/Location/LocationList"
import LocationDataProvider from "../components/Location/LocationDataProvider"
import "./Location/Location.css"

export default () => (
    <>
        <h2>Cosmic Chameleon Cennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalDataProvider>
            <LocationDataProvider>
                <CustomerDataProvider>
                    <AnimalList />
                </CustomerDataProvider>
            </LocationDataProvider>
        </AnimalDataProvider>

        <h2>Customers</h2>
        <CustomerDataProvider>
            <CustomerList />
        </CustomerDataProvider>


        <EmployeeDataProvider>
            <LocationDataProvider>
                <EmployeeList />
            </LocationDataProvider>
        </EmployeeDataProvider>


        <h2>Locations</h2>
        <LocationDataProvider>
            <LocationList />
        </LocationDataProvider>
    </>
)