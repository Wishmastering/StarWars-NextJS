"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/globals.css"
import Image from "next/image";
import Link from "next/link";

export default function Vehiclecard () {
    // Declaramos un hook donde 
    // guardaremos los resultado de los nombres
    const [vehicle, setVehicle] = useState([]);

     // Hacemos el fetch de la informacion y
    // la ALMACENAMOS en el useState "setVehicle"
    const fetchVehicle = async ()=>{
        return await axios.get('https://www.swapi.tech/api/vehicles/')
        .then((response) => {
          setVehicle(response.data.results)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    // Al cargar la pagina se correra el 
    // useEffect que se encargara de "cargar la funcion"
    // que acabamos de definir
    useEffect(()=> {fetchVehicle()}, []);
    // console.log("Vehicles", vehicle)

    return<>
        <div className="card-container">
            {vehicle.map((item,index) =>
        // Despues del arrow function mostramos
        // lo que se quiere mapear para cada uno
        <div className="cardi-b" key={index}>
                <h5> {item.name}</h5>
                <Image src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} width={200} height={200} alt={item.name}/>
                <div>
                    <h5><Link href={`/vehicle/item.uid`}> Learn More </Link></h5>
                    <h5>Read Later</h5>
                </div>
            </div>)}
        </div>
    </>
}