'use client'
import axios from "axios"
import "../../styles/globals.css"
import Image from "next/image"
import luke from "../../public/Luke.webp"
import { useEffect, useState } from "react"
import Link from "next/link"


export default function Startshipcard (){
    // Declaramos un hook donde 
    // guardaremos los resultado de los nombres
    const [starship, setStarship] = useState([]);

    // Hacemos el fetch de la informacion y
    // la ALMACENAMOS en el useState "setStarship"
    const fetchStarship = async () => {
        return await axios.get('https://www.swapi.tech/api/starships/')
            .then((response) => {
                setStarship(response.data.results)
            })
            .catch(function (error) {
          // handle error
          console.log(error);
            })
    }
    
    // Al cargar la pagina se correra el 
    // useEffect que se encargara de "cargar la funcion"
    // que acabamos de definir
    useEffect(()=> {fetchStarship()}, []);
    // console.log("These are the starships:", starship)
    
    return <>
    <div className="card-container">
        {starship.map((item,index)=>
        // Despues del arrow function mostramos
        // lo que se quiere mapear para cada uno
            <div className="cardi-b" key={index}>
                <h5> {item.name}</h5>
                <Image src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} width={200} height={200} alt={item.name}/>
                <div>
                    <h5><Link href={`/starships/${item.uid}`}>Learn More </Link></h5>
                    <h5>Read Later</h5>
                </div>
            </div>)}
    </div>
    </>
};