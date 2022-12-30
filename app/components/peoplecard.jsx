'use client'
import axios from 'axios';
import "../../styles/globals.css";
import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Peoplecard () {
    
    // Declaramos un hook donde 
    // guardaremos los resultado de los nombres
    const [people, setPeople] = useState([]);

    // Hacemos el fetch de la informacion y
    // la ALMACENAMOS en el useState "setPeople"
    const fetchPeople = async () => {
        return await axios.get("https://www.swapi.tech/api/people/")
         .then( (response) => {
             setPeople(response.data.results);
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
     };
     
    // Al cargar la pagina se correra el 
    // useEffect que se encargara de "cargar la funcion"
    // que acabamos de definir
     useEffect(() => {fetchPeople()}, [] );
    // console.log("These are the people:", people);
 

    // Lo siguiente es lo que se mostrara
    return<>
    <div className='card-container'>
    
        {people.map((item,index) => 
        // Despues del arrow function mostramos
        // lo que se quiere mapear para cada uno
        
        <div key={index}> 
            <div className="cardi-b" key={index}>
                <h5>{item.name}</h5>
                <Image src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
                width={200} height={200} alt={item.name}/>
                <div>
                    <Link href={`/characters/${item.uid}`}><h5>Learn More</h5></Link>
                    <h5>Read Later</h5>
                </div>
            </div>
        </div> )}
    </div>
    </>
};
