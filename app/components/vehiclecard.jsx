"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/globals.css"

export default function Vehiclecard () {
    const [vehicle, setVehicle] = useState([]);
    const pizza = []

    const fetchVehicle = async ()=>{
        return await axios.get('https://www.swapi.tech/api/vehicles/')
        .then((response) => {
          let pizza = response.data.results
          console.log(pizza)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    useEffect(()=> {fetchVehicle()}, []);
    // console.log("These Are The Vehicles:", pizza)

    return<>
        <p>Testing</p>
        <h3>Hey There</h3>
    </>
}