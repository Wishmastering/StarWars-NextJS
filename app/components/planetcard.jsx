'use client'
import axios from 'axios';
import "../../styles/globals.css"
import { useEffect, useState} from 'react';
import Image from "next/image"
import Link from 'next/link';


export default function Planetcard () {

    // Declaramos un hook donde guardaremos
    // los resultados de los nombres
    const [planet, setPlanet] = useState([]);

    // Hacemos el fetch de la informacion y
    // la ALMACENAMOS en el useState "setPeople"
    const fetchPlanet = async () => {
        return await axios.get("https://www.swapi.tech/api/planets/")
         .then( (response) => {
             setPlanet(response.data.results);
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
     };

    // Al cargar la pagina se correra el 
    // useEffect que se encargara de "cargar la funcion"
    // que acabamos de definir
    
    useEffect(() => {fetchPlanet()}, []);
    // console.log("These are the planets:", planet)

    return<>
        <div className="card-container">
            {planet.map((item, index) => 
            // Despues del arrow function mostramos
            // lo que se quiere mapear para cada uno
                <div className='cardi-b' key={index}>
                    <h5>{item.name}</h5>
                    <Image src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} width={200} height={200} alt={item.name}/>
                <div>
                <h5><Link href={`/planets/${item.uid}`}>Learn More</Link></h5>
                <h5>Read Later</h5>
                </div>
                </div>

            )}
             
        </div>
    </>
}